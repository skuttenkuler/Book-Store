import React from 'react';
import Book from '../Book/Book'


export default function BookList(){
    return(

        <div className="container bookList">
            <ul className="list-group">
                
                <Book/>

            </ul>
        </div>
    )
}