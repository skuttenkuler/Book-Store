import React, { Component } from "react";
import "./Searchbar.css"

class Searchbar extends Component {
    state = {
        bookName: ""
    };
    handleInput = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            bookName: ""
        });
    };
    render() {
        return (
            <div>
            <form className="form">
                <input
                    value={this.state.bookName}
                    name="searchbar"
                    type="text"
                    placeholder="Search for a Book"
                    onChange={this.handleInput}
                />
                <button onClick={this.handleSubmit}>Search</button>
            </form>
            </div>
        );
    };
};
export default Searchbar;