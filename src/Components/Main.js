import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/project.css"
class Main extends React.Component {
    render() {
        const { EarthquakeData } = this.props;
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light" style={{ "background": "lightgrey" }}>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link">
                                <img className="realtor_logo" src={EarthquakeData.site.logoImage} alt="Realtor Logo" /></Link>
                            </li>
                            <li className="main_title"><h2>Earthquake Zen Garden</h2></li>
                            <li className="profile_title"><Link to={'/Sally_Profile_Page'}>Welcome {EarthquakeData.profile.firstName}</Link></li>
                        </ul>
                    </div>
                </nav>
            </Router>
        );
    }
}
export default Main;
