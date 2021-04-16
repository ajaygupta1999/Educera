import React, { Component } from 'react';
import "../asserts/css/Model.scss";
import "../asserts/css/UserDetails.scss";

class UserDetails extends Component {

    constructor(props){
       super(props);
       this.state = {
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

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }

    handleSubmitStudent = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            userType : "student"
        });

        let dataobj = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            dob : this.state.dob,
            city : this.state.city,
            gender : this.state.gender,
            pincode : this.state.pincode,
            address : this.state.address,
            userType : "student"
        }

        this.props.handleRegister(dataobj);
    }

    handleSubmitTutor = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            userType : "tutor"
        });

        let dataobj = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            gender : this.state.gender,
            dob : this.state.dob,
            city : this.state.city,
            pincode : this.state.pincode,
            address : this.state.address,
            userType : "tutor"
        }

        this.props.handleRegister(dataobj);
    }

    handleCloseUserDetails = () => {
        this.props.handleCloseUserDetails();
    }

    render(){
        return(        
         <div className="modal-primary-container">
            <div className="modal-primary search-modal">
                <button className="modal-close-button" aria-label="close button" onClick={this.handleCloseUserDetails}> 
                   <i className="fas fa-times"></i>
                </button>
                <div className="user-details-section">
                    <h3 className="user-details-title">Enter Your Details</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="firstname" placeholder="Enter your first Name" name="firstname" 
                                  onChange={this.handleChange} value={this.state.firstname} required/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="lastname" placeholder="Enter your last name" name="lastname" 
                                  onChange={this.handleChange} value={this.state.lastname} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <select className="form-control addguest-page-select" name="gender" onChange={this.handleChange} value={this.state.gender} required>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <input type="date" name="dob" className="form-control" id="DateofBirth" placeholder="Date Of Birth" 
                                  onChange={this.handleChange} value={this.state.dob}  required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" id="Emailaddress" placeholder="Enter email" onChange={this.handleChange} 
                                value={this.state.email} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" name="address" className="form-control" id="inputAddress1" placeholder="Enter Address 1" 
                                onChange={this.handleChange} value={this.state.address} required/> 
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" id="inputCity" name="city" placeholder="Enter city" 
                                   onChange={this.handleChange} value={this.state.city} required />
                            </div>
                            <div className="form-group col-md-6">
                                <input type="number" className="form-control" id="inputCity" name="pincode" placeholder="Enter pincode" 
                                  onChange={this.handleChange} value={this.state.pincode}  required />
                            </div>
                        </div>
                        <div className="submit-section d-flex justify-content-between">
                            <div className="Sign-in-student">
                            <button type="submit" className="btn btn-warning" onClick={this.handleSubmitStudent}>Sign in as student</button>
                            </div>
                            <div className="Sign-in-tutor">
                            <button type="submit" className="btn btn-warning" onClick={this.handleSubmitTutor} >Sign in as tutor</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        
        );
    }
}


export default UserDetails;