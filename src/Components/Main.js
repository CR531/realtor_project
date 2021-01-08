import React from 'react';
import Profile from "./Profile";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/project.css"
const Main = ({ EarthquakeData }) => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ "background": "lightgrey" }}>
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link">
                        <img className="realtor_logo" src={EarthquakeData.site.logoImage} alt="Realtor Logo" /></Link>
                    </li>
                    <li className="main_title"><h2>Earthquake Zen Garden</h2></li>
                    <li className="profile_title"><Link to={'/Profile_Page'}><h6>Welcome {EarthquakeData.profile.firstName}</h6></Link></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={() => (<Redirect to='/Home_Page' />)} />
                <Route path='/Home_Page' render={() => <Home featureCollectionData={EarthquakeData.data} />} />
                <Route path='/Profile_Page' render={() => <Profile profileData={EarthquakeData.profile} />} />
            </Switch>
        </Router>
    );
}
export default Main;
