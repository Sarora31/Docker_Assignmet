const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/api/submit", {
      name: req.body.name,
      email: req.body.email,
    });

    res.send(response.data);
  } catch (error) {
    res.send("Error connecting to backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});