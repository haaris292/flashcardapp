require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./db");

const Vocab = require("./models/Vocab");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/categories", async (req, res) => {
  const categories = await Vocab.distinct("category");
  res.json(categories);
});

app.get("/category/:name", async (req, res) => {
  const words = await Vocab.find({
    category: req.params.name
  });
  res.json(words);
});

app.listen(3000, () => console.log("Server running on port 3000"));

app.use(cors({
  origin: "http://localhost:3001"
}));
