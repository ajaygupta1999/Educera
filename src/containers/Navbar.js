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
                                     (this.props.googleLogin.email.length > 0)  &&
                                      <li className="nav-item">
                                        <div className="user-details-after-login">
                                            <div className="Username-and-image-section d-flex justify-content-start align-items-center">
                                                <div className="Userimage-section mr-2">
                                                <img src={this.props.googleLogin.imgurl} />
                                                </div>
                                                <div className="username-and-email-section">
                                                    <p className="p1">{this.props.googleLogin.name}</p>
                                                    <p className="p2">{this.props.googleLogin.email}</p>
        
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                }

                                {
                                     ( (this.props.googleLogin.email.length === 0 ) &&  (firstname.length > 0 ) ) &&
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
                                    ( (this.props.googleLogin.email.length === 0 ) && (firstname.length === 0) ) && 
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
