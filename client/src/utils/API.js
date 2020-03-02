import axios from "axios";

export default {
// Gets all books
getBooks: function(){
    return axios.get("/api/books");
},
// Will be used to save a new book
saveBook: function(postData){
    return axios.post("/api/books", postData);
},
// Will delete the book given an id
deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
// Will load your single HTML page
getBook: function(id) {
    return axios.get("/client/build/index.html");
  },
}
