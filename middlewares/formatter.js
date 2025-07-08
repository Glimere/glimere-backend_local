const responseFormatter = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (data, customMessage) {
    // Check if the response is already formatted with status, message, and data
    const isFormatted =
      data &&
      typeof data === "object" &&
      !Array.isArray(data) && // Exclude arrays
      "status" in data &&
      "message" in data &&
      "data" in data;

    if (isFormatted) {
      // If already formatted, return it as-is
      return originalJson.call(res, data);
    }

    // Determine status code and success state
    const statusCode = res.statusCode || 200;
    const isSuccess = statusCode < 400;

    // Handle cases where data is an error object, array, or plain object
    let message =
      customMessage || (isSuccess ? "Request successful" : "An error occurred");
    let responseData = data;

    // If data contains a message (e.g., error response), use it
    if (
      data &&
      typeof data === "object" &&
      "message" in data &&
      typeof data.message === "string"
    ) {
      message = data.message;
      responseData = data.data || (Array.isArray(data) ? data : {});
    }

    // For arrays (e.g., getMaterials), use directly as data if no message is provided
    if (Array.isArray(data)) {
      responseData = data;
    }

    const formattedResponse = {
      status: isSuccess ? "success" : "error",
      message,
      data: responseData,
    };

    return originalJson.call(res, formattedResponse);
  };

  next();
};

module.exports = responseFormatter;
