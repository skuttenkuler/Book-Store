const Book = require("../models/book.js");


module.exports = app => {
  // Get all favorite books
  app.get("/api/books", (_, res) => {
    Book.find({})
      .sort("title")
      .then(books => res.json(books))
      .catch(err => console.log(err));
  });

  // Fovaorite a book
  app.post("/api/books", ({ body }, res) => {
    Book.create(body)
      .then(newBook => res.json(newBook))
      .catch(err => res.status(400).json(err));
  });

  // Get favorite book detail
  app.get("/api/books/:id", ({ params }, res) => {
    Book.findOne({ _id: params.id })
      .then(book => res.json(book))
      .catch(err => res.status(400).json(err));
  });

  // Delete faved book
  app.delete("/api/books/:id", ({ params }, res) => {
    Book.deleteOne({ _id: params.id })
      .then(deletedBook => res.json(deletedBook))
      .catch(err => res.status(400).json(err));
  });

};



