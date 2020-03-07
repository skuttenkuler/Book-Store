import React, { Component }  from "react";

import Searchbar from '../../components/Searchbar/Searchbar'
import API from '../../utils/API'
import { Navbar } from "../../components/Navbar/Navbar";
import FavoriteBooks from "../Favorites/Favorites";
import Books from '../../components/Books/Books'
import './Home.css'

class Home extends Component{
    state = {
        books: [],
        favBooks: [],
        saveId: [],
        title: "",
        author: "",
        synopsis: "",
        image: "",
        link: "",
        search: "",
        fav: false,
    };

    getFavBooks =() => {
        API.getBooks()
        .then(res => {
            this.setState({
                favBooks: res.data
            });
        }).catch(error => console.log(error))
    }
    componentDidMount(){
        this.getFavBooks();
    }
    handleInputChange = event => {
        const query = event.target.value;
        this.setState({
            search: query
        });
    };

    handleSearch = event => {
        event.preventDefault();
        console.log("clicked inside handle")
        console.log(this.state.search)
        API.searchBooks(this.state.search)
        .then(res => {
            console.log("yeah")
            this.setState({
                books: res.data.items
            });

        }).catch(error => this.console.log(error))
    }
    onClickHome = event => {
        event.preventDefault();
        this.setState({
            fav:false
        });
    };
    onClickFav = event => {
        event.preventDefault();
        this.setState({
            fav: true
        });
    };
    render(){
        return (
            <div className="home">
                <Navbar homeClick={this.onClickHome} favClick={this.onClickFav}></Navbar>
                <div className="header">
                    <h1>Find Your Favorite Books!</h1>
                    
                </div>
                <Searchbar 
                    onsubmit={this.handleSearch}
                    value={this.state.search}
                    onChange={this.handleInputChange}></Searchbar>
                { !this.state.savedPage && <Books
                    { ...this.state }
                /> }
                { this.state.savedPage && <FavoriteBooks
                    { ...this.state }
                /> }
            </div>
        )
    }
}
      
export default Home;


