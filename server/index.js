const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.static("client"));

const port = process.env.PORT || 4000;

app.listen(port, console.log(`server is running on port ${port}`));
