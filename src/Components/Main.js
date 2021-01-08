import React from 'react';
import Profile from "./Profile";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/project.css"
const Main = ({ EarthquakeData }) => {
    return (
        <Router>
            <div class="main_div">
                <div class="left_sub_div">
                    <Link to={'/'} className="nav-link">
                        <img className="realtor_logo" src={EarthquakeData.site.logoImage} alt="Realtor Logo" /></Link></div>
                <div class="center_sub_div"><h2>Earthquake Zen Garden</h2></div>
                <div class="right_sub_div"><Link to={'/Profile_Page'}><h6>Welcome {EarthquakeData.profile.firstName}</h6></Link></div>
            </div>
            <Switch>
                <Route exact path="/" component={() => (<Redirect to='/Home_Page' />)} />
                <Route path='/Home_Page' render={() => <Home featureCollectionData={EarthquakeData.data} />} />
                <Route path='/Profile_Page' render={() => <Profile profileData={EarthquakeData.profile} />} />
            </Switch>
        </Router>
    );
}
export default Main;
