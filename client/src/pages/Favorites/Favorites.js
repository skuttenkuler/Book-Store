import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API'
import "./Favorites.css"
const Favorites = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        loadBooks();
    }, []);

    function loadBooks(){
        API.getBooks()
        .then(results => {
            dispatch({ type: "loadFavs", books: results.data});
        });
    }

    function handleClick(id){
        console.log("handleDelete")
        API.deleteBook(id)
        .then(() => loadBooks()
        )};



    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
            <div className="jumbotron text-center">
                <div className="container">
                <h1 className="display-4 fav-jumbo">Your Favorites:</h1>
                
                </div>
            </div>

            <table className="table">
                <tbody>
                {state.map(book => {
                    return (
                    <tr key={book._id} className="favs">
                        <td  >
                        <img src={book.image} alt={book.title} />
                        </td>
                        <td>
                        <h5>{book.title}</h5>
                        <p>
                            by <strong>{book.authors}</strong>
                        </p>
                        <p>{book.description}</p>
                        </td>
                        <td>
                        <a
                            href={book.link}
                            className="btn btn-secondary"
                            target="_blank"
                        >
                            Google
                        </a>
                        <a
                            href="#"
                            onClick={() => handleClick(book._id)}
                            className="btn btn-danger"
                        >
                            Remove
                        </a>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};

export default Favorites;