const express = require("express");
const comments = require("./routes/comments");
const comments = require("./routes/posts");

const app = express();
const port = 8000;

app.use("/api", api);

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
