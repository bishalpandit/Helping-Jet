import HomeScreen from './Pages/HomeScreen';
import MapsPage from './Pages/MapsPage';
import Thanks from './Pages/ThanksPage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/ngos" component={MapsPage} />
        <Route path="/thanks" component={Thanks} />
      </Router>
    </div>
  );
}

export default App;
