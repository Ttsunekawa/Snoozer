import { Link } from 'react-router-dom';
import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  };

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  render() {
    let signUpInput = ""

    if(this.props.formType === 'Sign Up') {
      signUpInput = 
        <div className="box-text-input">
          <label htmlFor="input-username">username</label>
          <div className="input-container">
            <input id="input-username" type="text" className="box-text-input" placeholder="Enter new username" onChange={this.update('username')} value={this.state.username}/>
          </div>
        </div>
    } else {

    }
  
    return (
      <div className="session-background">
        <div className="auth-board-layout">
          <div className="left-panel">
            <div className="onboard-image-panel">
              <div className="content-container">
                <div>
                  <video autoPlay="on" src="https://sleepercdn.com/videos/draftboard.mp4" data-vscid="oexb3kxio"></video>
                </div>
              </div>
              <div className="title-continaer">
                <h1 className="left-panel-title">Welcome to Snoozer!</h1>
                <p className="left-panel-description">Snoozer is the easiest way to create a fantasy league with friends!</p>
              </div>
            </div> 
          </div>
          <div className="main-container">
            <header>
              <a className="logo" href="/">
                <img src="http://whitakergroup.net/wp-content/uploads/2015/11/SnoozerU.logo-Custom.png" alt=""/>
              </a>
            </header>
            <div className="auth-content-container">
              <div className="header-container">
                <div className="onboard-header-text">
                  <div className="header">{this.props.formType}</div>
                    {this.props.navLink}
                </div>
                <div className="onboard-desc-text">{this.props.onboardText}</div>
              </div>
              <div className="auth-form">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                  {signUpInput}
                  <div className="box-text-input">
                    <label htmlFor="email">email</label>
                    <div className="input-container">
                        <input autoComplete="off" id="email"type="text" className="box-text-input"  placeholder={this.props.emailPlace} onChange={this.update('email')} value={this.state.email} />
                    </div>
                  </div>
                  <div className="box-text-input">
                    <label htmlFor="input-password">password</label>
                    <div className="input-container">
                        <input id="input-password" type="password" className="box-text-input"  placeholder={this.props.passwordPlace} onChange={this.update('password')} value={this.state.password} />
                    </div>
                  </div>
                  <div className="submit-button"> 
                    <input type="submit" className="app-button-gradient" value={this.props.formType}/>
                  </div>   
                </form>
              </div>
            </div>
          </div>  
          <footer>
            <div className="media-links">
              {/* <a href="">
                <img src="" alt=""/>
              </a>     LINKED IN LOGO HERE */}
              {/* <a href="">
                <img src="" alt=""/>
              </a>  PERSONAL SITE HERE */}
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default SessionForm;