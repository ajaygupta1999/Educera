import React, { Component } from 'react';
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";
import Login from "./Login";
import TeacherView from "./TeacherView";
import OTPVerificationPage from "./OTPVerificationPage";
import UserDetails from "./UserDetails";
import "../asserts/css/index.scss";
import DemoVideo from "./DemoVideo";


class Myapp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isTeacherView : true,
            isDemoVideo : false,
            isUserDetails : false,
            isLoginActive : false,
            isOTPActive : false,
            Mobno : "",
            OTP: "",
            googleLogin : {
                name: '',
                email: '',
                accesstoken : "",
                imgurl : "",
            },
            selectedStd  : "11Th",
            userDetails : {
                firstname : "",
                lastname : "",
                email : "",
                dob : "",
                address :"",
                city : "",
                pincode : "",
                userType : ""
            }    
        }
    }

    toggleLogin = () => {
        this.setState({
            isLoginActive : !this.state.isLoginActive
        });
    }

    handleLoginNext = () => {
        this.setState({
            isLoginActive : false,
            isOTPActive : true
        });
    }

    OTPVerified = () => {
        this.setState({
            ...this.state,
            isOTPActive : false,
            isUserDetails : true,
        })
    }

    handleRegister = (dataobj) => {
        this.setState({
            isUserDetails : false,
            userDetails : {
                ...this.state.userDetails,
                firstname : dataobj.firstname,
                lastname : dataobj.lastname,
                dob : dataobj.dob,
                email : dataobj.email,
                city : dataobj.city,
                pincode : dataobj.pincode,
                gender : dataobj.gender,
                address : dataobj.address,
                userType : dataobj.userType
            }
        });
    }


    AddMobileNo = (no) => {
        let num = Math.floor(100000 + Math.random() * 900000);
        this.setState({
            ...this.state,
            Mobno : no,
            isLoginActive : false,
            isOTPActive : true,
            OTP : num
        });
    }

    resetOTP = () => {
        let num = Math.floor(100000 + Math.random() * 900000);
        this.setState({
            ...this.state,
            isLoginActive : false,
            isOTPActive : true,
            OTP : num
        });
    }

    handleShowTeacher = (data) => {
        this.setState({
            ...this.state,
            selectedStd : data.value,
            isTeacherView : true,
            isDemoVideo : false
        });
    }

    handleDemoClick = () => {
        this.setState({
            ...this.state,
            isTeacherView  :false,
            isDemoVideo : true
        });
    }

    handleCloseOTPVerification = () => {
        this.setState({
            ...this.state,
            isOTPActive : false
        });
    }

    handleCloseUserDetails = () => {
        this.setState({
            ...this.state,
            isUserDetails : false
        });
    }

    handleGoogleLogin = (data) => {
        this.setState({
            ...this.state,
            isLoginActive : false,
            googleLogin : {
                name: data.name,
                email: data.email,
                accesstoken : data.accesstoken,
                imgurl : data.imgurl
            }
        });
    }


    render(){
        return(
            <div className="main-page-section">
                <div>
                    <Navbar toggleLogin={this.toggleLogin} userDetails={this.state.userDetails} googleLogin={this.state.googleLogin} />
                    <div className="my-main-page-content">
                        <Mainpage />
                        {
                            this.state.isLoginActive && 
                            <Login handleGoogleLogin={this.handleGoogleLogin} toggleLogin={this.toggleLogin} handleLoginNext={this.handleLoginNext} AddMobNo={this.AddMobileNo}/>
                        }
                        {
                            this.state.isOTPActive && 
                            <OTPVerificationPage handleCloseOTPVerification={this.handleCloseOTPVerification} handleLoginNext={this.handleLoginNext} 
                                Mobno={this.state.Mobno} OTP={this.state.OTP} OTPVerified={this.OTPVerified} resetOTP={this.resetOTP}/>
                        }
                        {
                            this.state.isUserDetails && 
                            <UserDetails handleRegister={this.handleRegister} handleCloseUserDetails={this.handleCloseUserDetails} handleLoginNext={this.handleLoginNext} />
                        }
                    </div>   
                </div>
                <div className="start-learning-section">
                    <h1>START YOUR LEARNING WITH VIDYAYAN</h1>
                    <div className="our-bottom-some-links">
                        <button className="our-live-buttons btn btn-sm btn-md">
                            LEARN LIVE
                        </button>
                    
                        <button className="our-live-buttons btn btn-sm btn-md">
                            DEMO CLASSES
                        </button>
                    
                        <button className="our-live-buttons btn btn-sm btn-md">
                            JOIN COURSES
                        </button>
                    </div>
                </div>
                <div className="teacher-lecture-section">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="" aria-selected="false" onClick={() => {
                                this.handleShowTeacher({value : "13Th"})
                                }}> 13Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={() => {
                                this.handleShowTeacher({value : "12Th"})
                                }}> 12Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true"  onClick={() => {
                                this.handleShowTeacher({value : "11TH"})
                                }}> 11Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => {
                                this.handleShowTeacher({value : "10TH"})
                                }}> 10Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => {
                                this.handleShowTeacher({value : "9TH"})
                                }}> 9Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => {
                                this.handleShowTeacher({value : "8TH"})
                                }}> 8Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => {
                                this.handleShowTeacher({value : "7TH"})
                                }}> 7Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => {
                                this.handleShowTeacher({value : "6TH"})
                                }}> 6Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => {
                                this.handleShowTeacher({value : "1-5Th"})
                                }}> 1-5Th </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"  onClick={() => {
                                this.handleShowTeacher({value : "LKG-UKG"})
                                }} > LKG-UKG </a>
                        </li>
                    </ul>
            </div>
            <div class="tab-content education-standard-section" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {
                        this.state.isTeacherView &&
                        <TeacherView handleDemoClick={this.handleDemoClick} selectedStd={this.state.selectedStd}/>
                    }
                    {
                        this.state.isDemoVideo && 
                        <DemoVideo />
                    }
                </div>
            </div>
        </div>
        );
    }
}


export default Myapp;