import React, {Component} from 'react';

import {FavBtn} from '../FavBtn/FavBtn'
import API from '../../utils/API'
import { Book, BookList } from './BookCard'

class Books extends Component{
    
    
    handleFavBook = event => {
        const newFav = event.target.id;
        
        this.props.favBookID.concat(newFav)

        const book = {
            title:event.target.dataset.title,
            author:event.target.dataset.author,
            synopsis:event.target.dataset.synopsis,
            image:event.target.dataset.image,
            link: event.target.dataset.link
        };

        this.props.favBooks.concat(book)
        API.saveBook(book)
            .then(res => {
                console.log("success")
            }).catch(error => console.log(error))
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.props.book.length ? (
                    <BookList>
                        {this.props.book.map((book,i) => (
                            <Book key={ "book" + i}>
                                <img
                                    alt={book.title}
                                    src={book.imageLinks ? (book.imageLinks.thumbnail) : ("")}></img>
                                <a className="book" href={ book.volumeinfo.previewLink}> <i>{book.volumeInfo.title} by {book.voulmeINfo.authors}</i></a>
                                <br/>
                                <p>{book.volumeInfo.description}</p>
                                <FavBtn 
                                    key={"btn" + i}
                                    id={book.volumeInfo.title}
                                    onClick={this.FavBook}
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.author}
                                    synopsis={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks ? (book.volumeInfo.imageLinks.thumbnail) : ("")}
                                    link={book.volumeInfo.previewLink}>
                                        Favorite
                                    </FavBtn>

                            </Book>
                        ))}
                    </BookList>
                    ): ("Search for a favorite book!")}
                </div>
            </div>
        )
    }
}

export default Books