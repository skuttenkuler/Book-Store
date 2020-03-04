import axios from "axios";

export default {
// Gets all books
searchBooks: query => {
  return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&maxResults=20");
},
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

}
