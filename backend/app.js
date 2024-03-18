const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const database = require("./src/config/db.mongo");
const cors = require("cors");
const createuser = require("./src/middleware/login");
// const apiroutes = require('./src/routers/api')
const loginRouter = require("./src/routers/router.login");
const adduserRouter = require("./src/routers/router.getdata");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

database();
createuser();

app.use("/api", loginRouter);
app.use("/api", adduserRouter);

app.listen(port, () => {
  console.log(`Running - port ${port}`);
});
