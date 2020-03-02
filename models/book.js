const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: [{ type: String, required: true }],
  description: String,
  image: String,
  link: String,
  favorited:false
});

const Book = mongoose.model("Books", bookSchema);

module.exports = Book;
