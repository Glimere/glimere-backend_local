const responseFormatter = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (data, customMessage) {
    // Check if the response is already formatted
    const isFormatted =
      data &&
      typeof data === "object" &&
      !Array.isArray(data) && // Ensure it's not an array
      "status" in data &&
      "message" in data &&
      "data" in data;

    if (isFormatted) {
      // If already formatted, return it as-is without re-wrapping
      return originalJson.call(res, data);
    }

    // Handle cases where data is an error object or unformatted
    const statusCode = res.statusCode || 200;
    const isSuccess = statusCode < 400;

    // If data is an error object with a message, use it as the message
    const message =
      customMessage ||
      (data && data.message && typeof data.message === "string"
        ? data.message
        : isSuccess
        ? "Request successful"
        : "An error occurred");

    // If data is an error object, extract the data or use an empty object
    const responseData =
      data && typeof data === "object" && !data.message
        ? data
        : data?.data || {};

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
