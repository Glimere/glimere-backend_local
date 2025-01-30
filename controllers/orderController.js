// controllers/orderController.js
const Order = require("../models/orderModel");
const Apparel = require("../models/apparelModel");
const Shipping = require("../models/shippingModel");
const ShippingOption = require("../models/shippingOptionModel");
const Courier = require("../models/courierModel");

// Create an Order
const createOrder = async (req, res) => {
  const {
    items,
    shipping_address,
    total_price,
    total_items,
    shipping_option_id,
    delivery_notes,
    courier_id,
  } = req.body;

  try {
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "Authentication required" });
    }

    const shipping = await Shipping.findOne({ user: req.user._id });
    if (!shipping) {
      return res.status(404).json({ error: "Shipping address not found" });
    }

    const address = shipping.addresses.id(shipping_address);
    if (!address) {
      return res.status(404).json({ error: "Shipping address not found" });
    }

    const shippingOption = await ShippingOption.findById(shipping_option_id);
    if (!shippingOption) {
      return res.status(404).json({ error: "Shipping option not found" });
    }

    const courier = await Courier.findById(courier_id);
    if (!courier) {
      return res
        .status(404)
        .json({ error: "Courier not found for the selected shipping option" });
    }
    // Validate and create order items
    const orderItems = await Promise.all(
      items.map(async (itemId) => {
        const apparel = await Apparel.findById(itemId);
        if (!apparel) {
          throw new Error(`Apparel with ID ${itemId} not found.`);
        }

        // Return the order item details
        return {
          apparel: itemId,
          quantity: 1, // Default quantity if not provided
          selected_sizes: [], // Default empty array
          selected_materials: [], // Default empty array
          selected_colors: [], // Default empty array
          price: apparel.apparel_price, // Single item price
        };
      })
    );

    // Create the order
    const order = new Order({
      user: req.user._id,
      items: orderItems,
      shipping_address: address._id,
      total_price,
      total_items,
      delivery_notes: delivery_notes || "",
      shipping_option: shipping_option_id,
      selected_courier: courier_id,
      order_status: 'pending',
      payment_status: 'unpaid',
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error); // Log errors for debugging
    res.status(400).json({
      status: "error",
      message: "There was an error",
      data: { error: error.message },
    });
  }
};

// Get Order by ID
const getOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findById(orderId)
      .populate({
        path: "items.apparel",
        populate: { path: "apparel_images" },
      })
      .populate("items.selected_sizes")
      .populate("items.selected_materials")
      .populate("items.selected_colors")
      .populate("shipping_address")
      .populate("shipping_option")
      .populate("selected_courier");

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate({
        path: "items.apparel",
        populate: {
          path: "apparel_images", // Populate apparel_images within apparel
        },
      })
      .populate("items.selected_sizes")
      .populate("items.selected_materials")
      .populate("items.selected_colors")
      .populate("shipping_address")
      .populate("shipping_option")
      .populate("selected_courier");

    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Order Status
const updateOrderStatus = async (req, res) => {
  const { orderId } = req.params;
  const { order_status, payment_status } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    if (order_status) order.order_status = order_status;
    if (payment_status) order.payment_status = payment_status;

    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.params;
  const {
    items,
    shipping_address,
    shipping_option_id,
    courier_id,
    delivery_notes,
    total_price,
    total_items,
  } = req.body;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Update items
    if (items) {
      const updatedItems = await Promise.all(
        items.map(async (itemId) => {
          const apparel = await Apparel.findById(itemId);
          if (!apparel) {
            throw new Error(`Apparel with ID ${itemId} not found.`);
          }

          return {
            apparel: itemId,
            quantity: 1,
            selected_sizes: [],
            selected_materials: [],
            selected_colors: [],
            price: apparel.apparel_price,
          };
        })
      );
      order.items = updatedItems;
    }

    // Update shipping address
    if (shipping_address) {
      const shipping = await Shipping.findOne({ user: req.user._id });
      if (!shipping) {
        return res.status(404).json({ error: "Shipping address not found" });
      }

      const address = shipping.addresses.id(shipping_address);
      if (!address) {
        return res.status(404).json({ error: "Shipping address not found" });
      }

      order.shipping_address = address._id;
    }

    // Update shipping option
    if (shipping_option_id) {
      const shippingOption = await ShippingOption.findById(shipping_option_id);
      if (!shippingOption) {
        return res.status(404).json({ error: "Shipping option not found" });
      }
      order.shipping_option = shipping_option_id;
    }

    // Update courier
    if (courier_id) {
      const courier = await Courier.findById(courier_id);
      if (!courier) {
        return res
          .status(404)
          .json({ error: "Courier not found for the selected shipping option" });
      }
      order.selected_courier = courier_id;
    }

    // Update total price and total items
    if (total_price) order.total_price = total_price;
    if (total_items) order.total_items = total_items;

    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Order
const deleteOrder = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  createOrder,
  updateOrderStatus,
  deleteOrder,
  getOrder,
  getOrdersByUser,
  updateOrder,
};
