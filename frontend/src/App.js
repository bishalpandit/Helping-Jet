import HomeScreen from './Pages/HomeScreen'
import MapsPage from './Pages/MapsPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/ngos" component={MapsPage} />
      </Router>
    </div>
  );
}

export default App;
