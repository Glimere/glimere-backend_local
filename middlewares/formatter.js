const responseFormatter = (req, res, next) => {
  // Store the original res.json method
  const originalJson = res.json;

  // Wrap res.json to format responses
  res.json = function (data, customMessage) {
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
