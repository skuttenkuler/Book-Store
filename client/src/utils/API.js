import axios from "axios";

export default {
// Get Books
getBooks: function(){
    return axios.get("/api/books");
},
getBook: function(id){
  return axios.get("/api/books/" + id);
},
// Will be used to save a new book
saveBook: function(postData){
    return axios.post("/api/books/", postData);
},
// Will delete the book given an id
deleteBook: function(id) {
    return axios.delete("/api/search/" + id);
  },
// Will load your single HTML page
seachBooks: function(title) {
  return axios.get("/api/search/" + title)
}
};
