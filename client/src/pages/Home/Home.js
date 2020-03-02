import React  from "react";

import Searchbar from '../../components/Searchbar/Searchbar'
import './Home.css'
import BookList from '../../components/Booklist/Booklist'

export default function Home(){
    console.log("home")
        return(
            <div className="home">
                
                <Searchbar></Searchbar>
                <BookList></BookList>
            </div>
        )

}
