import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Favorites from './pages/Favorites/Favorites';
//import Details from './pages/Details/Details'
import { StoreProvider } from "./utils/GlobalState";
import Navbar from './components/Navbar/Navbar'
import './assets/css/App.css'

function App() {
  return (
   
    <Router>
      <div className="homePage">
        <StoreProvider>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
            {/* <Route exact path="/book/:id" component={Details}></Route> */}
          </Switch>
        </StoreProvider> 
      </div>
    </Router>
  
  );
}

export default App;
