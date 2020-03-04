import React, {Component} from 'react';

import {FavBtn} from '../../components/FavBtn/FavBtn'
import API from '../../utils/API'
import BookList from '../../components/Booklist/Booklist';
import Book from '../../components/Book/Book';

class Books extends Component{
    FavBook = event =>{
        const newfavBookID = event.target.id;
        
        this.props.favBookID.concat(newfavBookID)

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
                    {this.props.books.length ? (
                    <BookList>
                        {this.props.books.map((book,i) => (
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