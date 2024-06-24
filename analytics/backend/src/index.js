require("dotenv").config();
const { errorHandler } = require("./middlewares/handleError");
const routes = require("./routes");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const main = async function () {
  app.use(cors()); 
  app.use(express.json());
  app.use(routes);
  app.use(errorHandler);
};

main();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
