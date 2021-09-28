const express = require("express");
const app = express();
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("Application started and Listening on port 3000");
});

// serve your css as static
// app.use(express.static(__dirname ));
app.use(express.static('public'))

app.get("", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});