import HomeScreen from './Pages/HomeScreen';
import NGOPage from './Pages/NGOPage';
import Thanks from './Pages/ThanksPage';
import BloodDonation from './Pages/BloodDonation';
import Volunteer from './Pages/Volunteer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/ngo-oldage" component={NGOPage} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/blood-donate" component={BloodDonation} />
        <Route path="/volunteer" component={Volunteer} />
      </Router>
    </div>
  );
}

export default App;
