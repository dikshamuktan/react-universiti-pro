import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage';
import FavouritesPage from './pages/favouritespage';
import DetailsPage from './components/detailspage';
import Navbar from './components/Navbars'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/details/:country" component={DetailsPage} />
                <Route path="/favourites" component={FavouritesPage} />
            </Switch>
        </Router>
    );
}

export default App;