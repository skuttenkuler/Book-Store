const router = require("express").Router();
const controller = require("../controllers/bookController")
const axios = require('axios');

// API Routes
//search
router.get("/api/search/:terms", ({params}, res) => {
     var queryURL = 
     "https://www.googleapis.com/books/v1/volumes?q=" 
        + params.terms + "&maxResults=20";
        axios.get(queryURL)
        .then(res => results.json(res.data.items))
        .catch(err => res.status(400).json(err))
      });
    


//schema
router.get("/api/books", controller.findAll);
router.post("/api/books", controller.create);
router.get("/api/books/:id", controller.findOne);
router.delete("/api/books/:id", controller.remove);




module.exports = router;

