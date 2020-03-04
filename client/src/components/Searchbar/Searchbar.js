import React, { Component } from "react";

import "./Searchbar.css"

const SearchBar = ({value, onChange, onSubmit}) => {
    return (
        <div>
        <form className="searchbar" onSubmit={onSubmit}>
            <input
                type="search"
                id="searchbar"
                placeholder="Search for a Book"
                value={value}
                onChange={onChange}
            />
            <button className="button">
                <i className="fa fa-search"></i>
            </button>
        </form>
        </div>
    );
}
export default SearchBar
    
