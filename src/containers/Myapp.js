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
            isTeacherView : false,
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
            selectedStd  : "",
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

    handleShowTeacher = (e) => {
        this.setState({
            ...this.state,
            selectedStd : e.target.value,
            isTeacherView : true,
        });
    }

    closeTeacherView = () => {
        this.setState({
            ...this.state,
            selectedStd : "",
            isTeacherView : false,
        })
    }

    handleDemoClick = () => {
        this.setState({
            ...this.state,
            isTeacherView  :false,
            isDemoVideo : true
        });
    }

    closeDemoVideo = () => {
        this.setState({
            ...this.state,
            isDemoVideo : false
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
                    <div className="select-class-section">
                        <h1>Select Grade: </h1> 
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="13Th"> 13Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="12Th"> 12Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="11Th"> 11Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="10Th"> 10Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="9Th"> 9Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="8Th"> 8Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="7Th"> 7Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="6Th"> 6Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="1-5Th"> 1-5Th </button>
                        <button className="class-std btn btn-md btn-warning" onClick={this.handleShowTeacher} value="LKG-UKG"> LKG-UKG </button>
                    </div>
                    {
                        this.state.isTeacherView &&
                        <TeacherView closeTeacherView={this.closeTeacherView} handleDemoClick={this.handleDemoClick} selectedStd={this.state.selectedStd}/>
                    }
                    {
                        this.state.isDemoVideo && 
                        <DemoVideo  closeDemoVideo={this.closeDemoVideo} />
                    }
                </div>
            </div>
        );
    }
}


export default Myapp;