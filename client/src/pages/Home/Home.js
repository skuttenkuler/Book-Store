import React, { useRef, useEffect }  from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from '../../utils/API'

import './Home.css'

const Home = () => {
    
    const [state, dispatch] = useStoreContext();
  
    const inputRef = useRef();


    useEffect( () => {
        renderSearch([])
        console.log(state)
    }, []);
    function renderSearch(results) {
      dispatch({ type: "search", results: results });
    }
  
// promise to get data
    const handleSubmit = e => {
      e.preventDefault();
      //console.log(inputRef.current.value);
  
      API.searchBooks(inputRef.current.value)
        .then(books => {
          //console.log(books);
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
  
    
        return (
            <div className="container home">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="jumbotron">
                        <div className="container">
                        <h1 className="home-header">Welcome to My Bookstore!</h1>
                        <p className="lead">Which book are you looking for?</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="bookSearchInput"
                            placeholder="Book Title..."
                            ref={inputRef}>
                        </input>
                        <button type="submit" className="btn btn-primary">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    <table className="table">
                        <tbody>
                            {state.map(book => {
                            if (book.volumeInfo.imageLinks && book.volumeInfo.authors) {
                            return (
                                <tr key={book.id}>
                                <td>
                                    <img
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                    alt={book.title}
                                    />
                                </td>
                                <td>{book.volumeInfo.title}</td>
                                <td>
                                    <h5>{book.title}</h5>
                                    <p>
                                    by{" "}
                                    <strong>{book.volumeInfo.authors.join(" ")}</strong>
                                    </p>
                                    <p>{book.volumeInfo.description}</p>
                                </td>
                                <td>
                                    <a
                                    href="#"
                                    onClick={() =>
                                        handleClick({
                                        title: book.volumeInfo.title,
                                        authors: book.volumeInfo.authors.join(" "),
                                        description: book.volumeInfo.description,
                                        image: book.volumeInfo.imageLinks.thumbnail,
                                        link: book.volumeInfo.previewLink
                                        })
                                    }
                                    className="btn btn-primary"
                                    >
                                    Add
                                    </a>
                                    <a
                                    href={book.volumeInfo.previewLink}
                                    className="btn btn-secondary"
                                    target="_blank"
                                    >
                                    Google
                                    </a>
                                </td>
                                </tr>
                            );
                            }
                        })
                         } </tbody>
                    </table>
                    </div>
                </div>
                </div>
            );
            };

      
export default Home;


