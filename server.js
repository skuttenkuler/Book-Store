const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const router = require("./routes");
const cors = require("cors");
// Define middleware here

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else{
  app.use(express.static(__dirname + "/client/public/"))
}



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bookstore", {
  useNewUrlParser: true}).catch(error => console.log(error));
mongoose.connection.on("open", ref => {
  console.log("Database connected")
})


// Define API routes here
app.use("/api", router);

// Send every other request to the React app
//Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
