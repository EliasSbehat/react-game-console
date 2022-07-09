const express = require("express");
const axios = require("axios");

const app = express();

app.use("/", require("./routes/routes"));


app.listen(5000, () => console.log("Server is running on 5000"));
