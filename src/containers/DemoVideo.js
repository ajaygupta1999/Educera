import React, { Component } from 'react';
import "../asserts/css/DemoVideo.scss";


class DemoVideo extends Component {

    render(){
        return(
            <div className="card our-demo-cards-section">
                <div className="card-body">
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