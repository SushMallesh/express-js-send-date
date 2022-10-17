const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  dateFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  response.send(dateFormat);
});

module.exports = app;
