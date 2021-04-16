import React, { Component } from 'react';
import "../asserts/css/DemoVideo.scss";


class DemoVideo extends Component {

    closeDemoVideo = () => {
        this.props.closeDemoVideo();
    }

    render(){
        return(
            <div className="modal-primary-container">
                <div className="modal-primary search-modal">
                    <button className="modal-close-button" aria-label="close button" onClick={this.closeDemoVideo}> 
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="demo-video-section">
                        <h3 className="demo-video-text">Demo Video</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/x4r7af2Lcmw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div> 
        );
    }
}


export default DemoVideo;