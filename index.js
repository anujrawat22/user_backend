const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { UserRouter } = require("./routes/user.router");
var cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.use("/user", UserRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log(`Listening on PORT ${process.env.PORT}`);
  } catch (err) {
    console.log("Error connecting to DB");
    console.log(err);
  }
});
