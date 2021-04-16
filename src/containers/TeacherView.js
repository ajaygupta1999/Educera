import React, { Component } from 'react';
import "../asserts/css/Model.scss";
import "../asserts/css/DemoVideo.scss";

class TeacherView extends Component {

    closeTeacherView = () => {
        this.props.closeTeacherView();
    }

    handleDemoClick = () => {
        this.props.handleDemoClick();
    }

    render(){
        return(        
         <div className="modal-primary-container">
            <div className="modal-primary search-modal">
                <button className="modal-close-button" aria-label="close button" onClick={this.closeTeacherView}> 
                   <i className="fas fa-times"></i>
                </button>

                <div className="Teacher-review">
                    <div className="row teachers-data-div">
                        <div className="col-5">
                            <img src="/Images/UserImage.jpg"></img>
                        </div>
                        <div className="col-7">
                            <div className="timings">
                                <p className="grade-section">Grade <strong>{ this.props.selectedStd }</strong></p>
                                <p className="time-section">5.00 pm - 8.00 pm</p>
                            </div>
                            <hr />
                            <div className="teacher-personal-details">
                                <p className="name">PRANAY SHREE</p>
                                <p className="profession">B.Tech - IIT BOMBAY</p>
                                <p className="expert">Math Expert</p>
                            </div>
                        </div>
                    </div>
                    <div className="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-md btn-warning">
                            Send Request
                        </button>
                        <button className="btn btn-md btn-warning" onClick={this.handleDemoClick}>
                            Demo Video
                        </button>
                    </div>
                </div>
                
            </div>
        </div> 
        
        );
    }
}


export default TeacherView;