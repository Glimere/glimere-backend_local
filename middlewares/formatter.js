const responseFormatter = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (data, customMessage) {
    // Check if the response is already fully formatted
    const isFullyFormatted =
      data &&
      typeof data === "object" &&
      !Array.isArray(data) &&
      data.status &&
      typeof data.status === "string" &&
      data.message &&
      typeof data.message === "string" &&
      "data" in data;

    if (isFullyFormatted) {
      // Return fully formatted response unchanged
      return originalJson.call(res, data);
    }

    // Determine status code and success state
    const statusCode = res.statusCode || 200;
    const isSuccess = statusCode < 400;

    // Initialize response fields
    let status = isSuccess ? "success" : "error";
    let message =
      customMessage || (isSuccess ? "Request successful" : "An error occurred");
    let responseData = data;
    let pagination = null;

    // Handle partially formatted responses or other cases
    if (data && typeof data === "object" && !Array.isArray(data)) {
      // Use provided status if valid, otherwise default
      status =
        data.status && typeof data.status === "string" ? data.status : status;
      // Use provided message if valid, otherwise default
      message =
        data.message && typeof data.message === "string"
          ? data.message
          : message;
      // Extract pagination if present
      pagination = data.pagination || null;
      // Use provided data if present, otherwise extract or default
      responseData = "data" in data ? data.data : data;
    } else if (Array.isArray(data)) {
      // If data is an array, use it directly as responseData
      responseData = data;
    } else if (typeof data === "string") {
      // If data is a string, treat it as the message
      message = data;
      responseData = {};
    }

    // Construct the formatted response
    const formattedResponse = {
      status,
      message,
      data: responseData,
    };

    // Add pagination if it exists
    if (pagination) {
      formattedResponse.pagination = pagination;
    }

    return originalJson.call(res, formattedResponse);
  };

  next();
};

module.exports = responseFormatter;
