import React from 'react';
import './Book.css'
export default function Book(){
    return(
            <div className="container book">
                <div className="row">
                    <div className="col-sm-2">
                        <h1 className="title">Dune</h1>
                        <h2 className="author">Frank Herbert</h2>
                            <div className="buttons">
                                <button className="favorite"> Add to Favorites </button>
                            </div>
                            <div className="description">
                                <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                            </div>
                        <div className="book-image">
                            <img className="image" alt="cover"src={"../assets/images/81BJ3OD3J-L.jpg"}/>
                            </div>
                    </div>
                </div> 
        </div>
    )
}