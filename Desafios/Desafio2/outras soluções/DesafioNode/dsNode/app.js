const express = require('express')

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/home.html");
})

app.get("/primeiro.html", (req, res) => {
  res.sendFile(__dirname + "/src/primeiro.html");
})

app.get("/segundo.html", (req, res) => {
  res.sendFile(__dirname + "/src/segundo.html");
})

app.get("/terceiro.html", (req, res) => {
  res.sendFile(__dirname + "/src/terceiro.html");
})

app.get("/quarto.html", (req, res) => {
  res.sendFile(__dirname + "/src/quarto.html");
})

app.listen(3000);