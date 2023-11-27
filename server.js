const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.listen(3000, () => console.log("Server running on http://localhost:3000"));

// Write your code bellow. Here is an example of a route:
app.post("/ping", async (req, res) => {
  res.send("pong");
});
