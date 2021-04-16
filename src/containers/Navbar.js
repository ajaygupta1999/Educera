import React, { Component } from 'react';

class Navbar extends Component {
    toggleLogin = () => {
        this.props.toggleLogin();
    }

    render(){

        let  { firstname , lastname , userType} = this.props.userDetails;
        let fullname = firstname + " " + lastname;
        return(
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light My-navbar">
                        <a className="navbar-brand" href="#"><i class="fas fa-university"></i> <span>Logo</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">EXPLORE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">COURSES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">FREE CODING</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">TUTOR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">STUDY MATERIALS</a>
                                </li>
                                {
                                    (firstname.length > 0) &&
                                      <div>
                                        <div className="navbar-username">
                                            <li className="nav-item">
                                                <h4>{fullname}</h4>
                                            </li>
                                        </div>
                                        <div className="navbar-usertype">
                                            <li className="nav-item">
                                                <p>{userType.toUpperCase()}</p>
                                            </li>
                                        </div>
                                      </div>
                                }
                                {
                                    (firstname.length === 0) && 
                                        <li className="nav-item">
                                            <button className="nav-link btn btn-sm btn-primary" onClick={this.toggleLogin}>Sign In</button>
                                        </li>
                                }
                                
                            </ul>
                        </div>
                    </nav>
                </div>
           )
    }
}


export default Navbar;
