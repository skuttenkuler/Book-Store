import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import FavoriteBooks from './pages/Favorites/Favorites';
import './assets/css/App.css'

function App() {
  return (
   
    <Router>
      <div className="homePage"> 
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/favorites" component={FavoriteBooks}></Route>
      </div>
    </Router>
  
  );
}

export default App;
