const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("client"));

const port = process.env.PORT || 4000;

const { getLandinPage } = require("./controller/controller");

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
app.get("/", (req, res) => console.log("hit server"));

app.listen(port, console.log(`server is running on port ${port}`));
