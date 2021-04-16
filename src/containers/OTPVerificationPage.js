import React, { Component } from 'react';
import "../asserts/css/Model.scss";
import "../asserts/css/OTPVerification.scss";

class Login extends Component {

    constructor(props){
       super(props);
       this.state = {
           isError : false,
           OTP : "",
           input1: "",
           input2 : "",
           input3 : "",
           input4 : "",
           input5 : "",
           input6 : "",
       }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let num = this.state.input1 + this.state.input2 + this.state.input3 + this.state.input4 + this.state.input5 + this.state.input6;
        if(num === this.state.OTP.toString()){
            this.props.OTPVerified();
        }else{
            this.setState({
                isError : true
            });
        }
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        if(JSON.stringify(prevProps.OTP) !== JSON.stringify(this.props.OTP)){
            this.setState({
                OTP : this.props.OTP
            });
        }
    }

    componentWillMount = () => {
        this.setState({
            OTP : this.props.OTP
        });
     }

    toggleLogin = () => {
        this.props.toggleLogin();
    }

    handleNext = () => {
        this.props.handleLoginNext();
    }

    handleCloseOTPVerification = () => {
        this.props.handleCloseOTPVerification();
    }

    resetOTP = () => {
        this.props.resetOTP();
    }

    render(){
        return(        
         <div className="modal-primary-container">
            <div className="modal-primary search-modal">
                <button className="modal-close-button" aria-label="close button" onClick={this.handleCloseOTPVerification}> 
                   <i className="fas fa-times"></i>
                </button>
                    {
                        this.state.isError &&
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                OTP do not match. please enter correct OTP.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                    }
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        Your OTP is <strong>{this.props.OTP}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="OTPVerification-page">
                         <h1 className="otp-text-h1">please enter otp sent to your mobile number <strong>{this.props.Mobno}</strong></h1>
                         <form onSubmit={this.handleSubmit} className="otp-form">
                            <div className="otp-inputs d-flex justify-content-center">
                                <input name="input1" onChange={this.handleChange} value={this.state.input1} type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                                <input name="input2" onChange={this.handleChange} value={this.state.input2} type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                                <input name="input3" onChange={this.handleChange} value={this.state.input3} type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                                <input name="input4" onChange={this.handleChange} value={this.state.input4} type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                                <input name="input5" onChange={this.handleChange} value={this.state.input5} type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                                <input name="input6" onChange={this.handleChange} value={this.state.input6} type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" required/>
                            </div>
                            <a className="reset-button" href="#" onClick={this.resetOTP}> Resend OTP </a>
                            <div className="Verify-page-section">
                               <button type="submit" className="btn btn-md btn-warning btn-block" onClick={this.handleNext}>Verify and proceed</button>
                            </div>
                        </form>
                         
                        
                    </div>
            </div>
        </div> 
        
        );
    }
}


export default Login;