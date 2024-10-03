// responseFormatter.js
const responseFormatter = (req, res, next) => {
    // Overwrite the res.json method
    const oldJson = res.json;

    res.json = (data) => {
        const formattedResponse = {
            status: res.statusCode < 400 ? 'success' : 'error',
            message: res.statusMessage || (res.statusCode < 400 ? 'Request was successful' : 'There was an error'),
            data: data
        };

        oldJson.call(res, formattedResponse);
    };

    next();
};

module.exports = responseFormatter;
