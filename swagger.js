const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Glimere API",
      version: "1.0.0",
      description: "API documentation for the Glimere platform",
    },
    servers: [
      {
        url: "http://localhost:4000/api",
        description: "Local development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Point to your route files
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
