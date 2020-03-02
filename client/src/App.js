import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home/Home"
import './assets/css/App.css'

function App() {
  return (
   
    <Router>
      <div className="homePage"> 
          <Route exact path="/" component={Home}></Route>
      </div>
    </Router>
  
  );
}

export default App;
