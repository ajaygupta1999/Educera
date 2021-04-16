import React, { Component } from 'react';
import "../asserts/css/Mainpage.scss";
import playstore from "../Images/Playstore.png";
import applestore from "../Images/Applestore.png";
import Learntocode from "../Images/Learntocode.png";
import Mobileapp from "../Images/Mobile-app.png";
import YellowRectangle from "../Images/Yellow-rectangle.png";

class Mainpage extends Component{
   
     render(){
        return(
             <div className="main-page">
                <div className="first-section row">
                     <div className="col-md-8">
                          <div className="flex-column">
                              <div className="Intro-section">
                                 <h3>Introduction</h3>
                                 <p className="eclipse-intro">
                                     A complete platform for online and offline tutoring which is a network 
                                    of knowledge where student can learn from the desired teacher as well as it enables teacher to teach the students.
                                 </p>
                              </div>
                              <div className="some-text-about-courses">
                                  <h1>NOW YOUR TUTOR IS JUST ONE STEP AWAY.</h1>
                                  <h3>LET'S GAIN TOGETHER</h3>
                              </div>
                          </div>
                     </div>
                     <div className="col-md-4">
                        <img style={{ height : "400px" }} src={Mobileapp}></img>
                     </div>
                 </div>
                <div className="phone-no-section d-flex justify-content-between">
                    <div class="input-group search-tutor-section mb-3">
                        <input type="text" class="form-control" placeholder="Search your tutor" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">Find</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="or-h3">OR</h3>
                    </div>
                    <div className="find-me-a-tutor-section">
                       <button className="btn btn-sm btn-warning">FIND ME A TUTOR</button>
                    </div>
                 </div> 
                <div className="download-section row">
                    <div className="col-md-6">
                        <p className="find-your-tutor-text">Find Your Tutor Today! Download App Now</p>
                        <div className="download-images d-flex justify-content-start">
                            <div className="playstore-image d-flex align-items-center">
                                <img className="playstore-image" src={playstore} />
                            </div>
                            <div className="Applestore-image d-flex align-items-center">
                                <img className="applestore-image" src={applestore} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="get-link-to-download-text">Get Link to download the App</p>
                        <div className="get-link-section d-flex justify-content-start">
                            <div class="input-group search-tutor-section mb-3">
                                <div className="get-link-button-sections btn-group">
                                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        +91
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">+92</a>
                                        <a class="dropdown-item" href="#">+93</a>
                                        <a class="dropdown-item" href="#">+94</a>
                                    </div>
                                </div>
                                <input type="text" value="9136276671" class="form-control" placeholder="Get downloading link" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <span class="input-group-text" id="basic-addon2">GET LINK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="learn-to-code-section">
                    <div className="row">
                        <div className="col-md-6 keep-learning-text">
                            <h1> Keep Learning along with free coding classes </h1>
                        </div>
                        <div className="col-md-6">
                            <div className="images-sections-of-app">
                                <img src={YellowRectangle} />
                                <div className="lower-sections">
                                    <p className="text-of-coding-section">Coding Classes for age <br /> 6 - 12</p>
                                    <img className="some-text-image" src={Learntocode}  />
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
             </div>
        );
     }

}


export default Mainpage;