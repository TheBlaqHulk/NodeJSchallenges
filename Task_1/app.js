const express = require("express");
const app = express();
app.use(express.static("."));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(8080);
