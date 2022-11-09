const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our React Shopping API");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 8000;

app.listen(port, console.log(`Server runningon port ${port}`));
