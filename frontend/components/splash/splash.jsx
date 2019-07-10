import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return(
      <div className="splash-main-container">
        <h1>Start a fantasy league today</h1>
        <h4>Create a free fantasy football league in just 60 seconds</h4>
        <video className="splash-video" autoPlay={true} loop={true} muted={true} data-vscid="eif4dxw3j" src="https://sleepercdn.com/videos/hero_home-16cb353f3a768e0d3fc8c2a710eb5598.mp4?vsn=d" type="video/mp4">
            Your browser does not support the video tag.
        </video>
      </div>
    )
  }
}



export default Splash;