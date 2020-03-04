import React, {Component} from 'react';
import API from '../../utils/API'
import Book from '../../components/Book/Book'
import Booklist from '../../components/Booklist/Booklist'
import { DeleteBtn } from '../../components/DeleteBtn/DeleteBtn';
class FavoriteBooks extends Component {
    getFavs = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                favBooks: res.data
            });
        }).catch(error => console.log(error));
    };
    
    componentDidMount() {
        this.getFavs();
    };

    handleDelete = event => {
        event.preventDefault();

        const deleteBook = event.target.id;
        API.deleteBook(deleteBook)
        .then(res => {
            console.log("deleted");
        }).catch(error => console.log(error))
    }
    render(){
        return(
            <div className="container">
            <h4>Your Favorites:</h4>
                <div className="row">
                    {this.props.favBooks.length ? (
                        <Booklist>
                            {this.props.favBooks.map((favBooks, i) => (
                                <Book key={"card" + i}>
                                    <img src={ favBooks.image ? (favBooks.image): ("")}
                                         alt={favBooks.title}></img>
                                    <a className="book" href={favBooks.link}><i>{favBooks.title}</i> by {favBooks.author}</a>
                                    <br/>
                                    <p>{favBooks.synopsis}</p>
                                    <DeleteBtn 
                                        key={i}
                                        id={favBooks.id}
                                        onClick={this.handleDelete}>
                                                Delete
                                    </DeleteBtn>
                                </Book>
                            ))}     
                        </Booklist>
                    ) : (<h4>No favorited Books yet!</h4>)}
                </div>
            </div>
        )
    }
}

export default FavoriteBooks;