const responseFormatter = (req, res, next) => {
  const originalJson = res.json;

  res.json = function (data, customMessage) {
    // Check if data is already formatted (has status, message, and data)
    const isFormatted =
      data &&
      typeof data === "object" &&
      "status" in data &&
      "message" in data &&
      "data" in data;

    if (isFormatted) {
      // If already formatted, return it as-is
      return originalJson.call(res, data);
    }

    // If not fully formatted, create a new formatted response
    const statusCode = res.statusCode || 200;
    const isSuccess = statusCode < 400;

    const formattedResponse = {
      status: isSuccess ? "success" : "error",
      message:
        customMessage ||
        (isSuccess ? "Request successful" : "An error occurred"),
      data: data || {},
    };

    return originalJson.call(res, formattedResponse);
  };

  next();
};

module.exports = responseFormatter;
