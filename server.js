const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const PORT = process.env.PORT || 3001;
const app = express();
const router = require("./routes");
const cors = require("cors");
// Define middleware here


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else{
  app.use(express.static(__dirname + "/client/public/"))
}


app.use("/api/books", router);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});



// Define API routes here
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bookstore", {
  useNewUrlParser: true}).catch(error => console.log(error));
mongoose.connection.on("open", ref => {
  console.log("Mongo connected")
})
534
// Send every other request to the React app
//Define any API routes before this runs



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
