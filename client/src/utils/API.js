import axios from "axios";

export default {
// Get Books
getBooks: function(){
    return axios.get("/api/books");
},
getDetails: function(id){
  return axios.get("/api/books/" + id);
},
// Will be used to save a new book
saveBook: function(postData){
    console.log("saveBook")
    return axios.post("/api/books/", postData);
},
// Will delete the book given an id
deleteBook: function(id) {
    console.log(id)
    return axios.delete("/api/books/" + id);
  },
// Will load your single HTML page
searchBooks: function(searchTerms) {
  return  axios
          .get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms + "&maxResults=40")
          .then(books => books)
          .catch(err => console.log(err));
},
};

