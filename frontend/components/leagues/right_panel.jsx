import React from 'react';

const RightPanel = (props) => {
  return(
    <div className="auth-board-layout show">
      <div className="left-panel show">
        <div className="onboard-image-panel">
          <div className="content-container">
            <div>
              <video autoPlay="on" loop="on" src="https://sleepercdn.com/videos/draftboard.mp4" data-vscid="oexb3kxio"></video>
            </div>
          </div>
          <div className="title-continaer">
            <h1 className="left-panel-title">Chat Box Here!</h1>
            <p className="left-panel-description">Eventually....</p>
          </div>
        </div>
      </div>
      <div className="right-panel">
        {/* Github/linkedin and stuff */}
        <div className="social-medias">
          <a href="https://github.com/Ttsunekawa" className="git">git</a>
          <a href="https://www.linkedin.com/in/tyler-tsunekawa-8539a618b/" target="_blank" className="linkedin">in</a>
      </div>
    </div>
  )
}