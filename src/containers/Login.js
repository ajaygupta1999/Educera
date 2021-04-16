import React, { Component } from 'react';
import "../asserts/css/Model.scss";
import "../asserts/css/Login.scss";

class Login extends Component {
 
    constructor(props){
        super(props)
        this.state = {
            Nocode : "+91",
            Mobno : ""
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
        let mob = this.state.Nocode + this.state.Mobno;
        this.props.AddMobNo(mob);
    }


    toggleLogin = () => {
        this.props.toggleLogin();
    }

    handleNext = () => {
        this.props.handleLoginNext();
    }

    render(){
        return(        
         <div className="modal-primary-container">
            <div className="modal-primary search-modal">
                <button className="modal-close-button" aria-label="close button" onClick={this.toggleLogin}> 
                   <i className="fas fa-times"></i>
                </button>
                    <div className="Login-page">
                         <h1 className="mobile-number-text">Enter Mobile Number to Continue</h1>
                         <div class="input-group search-tutor-section mb-3">
                             <form onSubmit={this.handleSubmit}>
                                 <div className="d-flex justify-content-center">
                                    <div className="form-group telephone-code">
                                        <select className="form-control addguest-page-select" name="Nocode" onChange={this.handleChange} value={this.state.Nocode}>
                                            <option value="+91">+91</option>
                                            <option value="+92">+92</option>
                                            <option value="+93">+93</option>
                                        </select>
                                    </div>
                                    <div className="input-phone-number-section">
                                        <input type="tel" minLength="10" maxLength="10" class="form-control" placeholder="Enter Phone Number" name="Mobno"
                                        onChange={this.handleChange} value={this.state.Mobno} aria-label="Recipient's username" aria-describedby="basic-addon2" required />
                                    </div>
                                 </div>
                                 <button className="btn btn-md btn-warning">Next</button>
                             </form>
                        </div>
                         
                         <h3>Or</h3>
                         <button className="btn btn-md btn-warning">Continue With Google</button>
                    </div>
            </div>
        </div> 
        
        );
    }
}


export default Login;