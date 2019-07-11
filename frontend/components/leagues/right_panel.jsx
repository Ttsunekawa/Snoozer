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
          <div className="git">git</div>
          <div className="linkedin">in</div>
        </div>
      </div>
    </div>
  )
}