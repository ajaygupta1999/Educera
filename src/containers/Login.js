import React, { Component } from 'react';
import "../asserts/css/Model.scss";
import "../asserts/css/Login.scss";

var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

class Login extends Component {
 
    constructor(props){
        super(props)
        this.state = {
            Nocode : "+91",
            Mobno : "",
            authRelatedData : {
                name: '',
                email: '',
                accesstoken : "",
                googleAuth: '',
                imgurl : "",
            }
        }
    }

    componentWillMount = async () => {
        try{
            var script = document.createElement('script');
            script.onload=this.handleClientLoad;
            script.src="https://apis.google.com/js/api.js";
            document.body.appendChild(script);
        }catch(err){
            console.log(err);
        }
    }

    handleClientLoad = () => {
        window.gapi.load('client:auth2', this.initClient);
    }

    initClient = () => {
        try{
            window.gapi.client.init({
              'apiKey': "AIzaSyCP6sQLJxUYuZhFwMctY1bug0-CkgRBcTo",
              'clientId': "755925335295-qmcfaigpmp9ch2hno1g5qpb3n5ifm6jh.apps.googleusercontent.com",
              'scope': SCOPE,
              'discoveryDocs': [discoveryUrl]
            }).then(() => {
              this.setState({
                ...this.state,
                authRelatedData : {
                  ...this.state.authRelatedData,
                  googleAuth: window.gapi.auth2.getAuthInstance()
                }
              });

              this.state.authRelatedData.googleAuth.isSignedIn.listen(this.updateSigninStatus);
              if(!this.state.authRelatedData.googleAuth.isSignedIn.get()) {
                  console.log("Please login first");
                  document.getElementById('sign').addEventListener('click', this.signInFunction);
              }else{
                  var user = this.state.authRelatedData.googleAuth.currentUser.get();
                  var accesstoken = this.state.authRelatedData.googleAuth.currentUser.get().getAuthResponse().access_token;
                  let username = user.getBasicProfile().getName();
                  let email = user.getBasicProfile().getEmail();
                  let imgurl = user.getBasicProfile().getImageUrl();
                  this.setState({
                      ...this.state,
                      authRelatedData : {
                        ...this.state.authRelatedData,
                        name: username,
                        accesstoken : accesstoken,
                        email : email,
                        imgurl
                      }
                  });
              }
              // document.getElementById('sign').addEventListener('click', this.signInFunction);
              // document.getElementById('signout-btn').addEventListener('click', this.signOutFunction);
          });
        }catch(e){
          console.log(e);
        }
    }



    signInFunction = async () => {
        await this.state.authRelatedData.googleAuth.signIn();
        await this.updateSigninStatus();
    }

    signOutFunction = async () => {
        await this.state.authRelatedData.googleAuth.signOut();
        await this.updateSigninStatus();
    }

    updateSigninStatus = async () => {
        if(!this.state.authRelatedData.googleAuth.isSignedIn.get()) {
            console.log("Please login first");
            this.setState({
              ...this.state,
              authRelatedData : {
                 ...this.state.authRelatedData,
                 name: "",
                 email: "",
                 accesstoken : "",
              }
            });
        }else{
          var user = this.state.authRelatedData.googleAuth.currentUser.get();
          var accesstoken = this.state.authRelatedData.googleAuth.currentUser.get().getAuthResponse().access_token;
          let username = user.getBasicProfile().getName();
          let email = user.getBasicProfile().getEmail();
          let imgurl = user.getBasicProfile().getImageUrl();
          
          this.setState({
            ...this.state,
            authRelatedData : {
              ...this.state.authRelatedData,
              name: username,
              accesstoken : accesstoken,
              email : email,
              imgurl
            }
          });

          let dataobj = {
            name: username,
            accesstoken : accesstoken,
            email : email,
            imgurl : imgurl
          }

          this.props.handleGoogleLogin(dataobj);

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
                                            <option value="+94">+94</option>
                                            <option value="+95">+95</option>
                                            <option value="+96">+96</option>
                                            <option value="+97">+97</option>
                                            <option value="+98">+98</option>
                                            <option value="+99">+99</option>
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
                         <h3>OR</h3>
                         <button className="btn btn-md btn-primary blue-button" id="sign" onClick={this.signInFunction}><i class="fab fa-google"></i> SignIn With Google </button>
                    </div>
            </div>
        </div> 
        
        );
    }
}


export default Login;