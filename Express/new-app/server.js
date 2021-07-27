const express = require("express");
const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json("jj");
});

const server = app.listen(8002, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);