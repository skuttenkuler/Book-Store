# My Book Store

A MERN stack application utilizing Google Books API to search and favorite your own list of books. 

![Alt text](./client/src/assets/images/BookStore.gif?raw=true "Preview")


## Technologies Used

* [React](https://reactjs.org/)
* [NodeJS](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Google Books API](https://developers.google.com/books)

## Code Snippets

Methods to hand searching and displaying returning books.

```javascript
    
    const [state, dispatch] = useStoreContext();
  
    const inputRef = useRef();


    useEffect( () => {
        renderSearch([])
        console.log(state)
    }, []);
    function renderSearch(results) {
      dispatch({ type: "search", results: results });
    }
  

    const handleSubmit = e => {
      e.preventDefault();
      
  
      API.searchBooks(inputRef.current.value)
        .then(books => {

          renderSearch(books.data.items);
        })
        .catch(err => console.log(err));
    };
  
    function handleClick(book) {
      console.log("handleclick");
      API.saveBook(book).then(() => {
        console.log("success");
      });
    }
  ```

Client Side Routes

  ```javascript
  getBooks: function(){
    return axios.get("/api/books");
},

saveBook: function(postData){
    console.log("saveBook")
    return axios.post("/api/books/", postData);
},

deleteBook: function(id) {
    console.log(id)
    return axios.delete("/api/books/" + id);
  },

searchBooks: function(searchTerms) {
  return  axios
          .get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerms + "&maxResults=40")
          .then(books => books)
          .catch(err => console.log(err));
},
};

  ```

# Author
  * Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)

# API

[Google Books](https://developers.google.com/books)
