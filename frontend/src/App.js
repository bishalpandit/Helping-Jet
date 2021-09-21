import HomeScreen from "./Pages/HomeScreen"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomeScreen} exact />
      </Router>
    </div>
  );
}

export default App;
