const express = require("express");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const YAML = require("yaml");

const router = express.Router();

const file = fs.readFileSync("./swagger.yaml", "utf8");

const SwaggerDocument = YAML.parse(file); //e

router.use("/", swaggerUi.serve);

router.get("/", swaggerUi.setup(SwaggerDocument));

module.exports = router;