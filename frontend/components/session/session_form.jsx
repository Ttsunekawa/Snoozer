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
        <label>username
          <input type="text" placeholder="Enter new username" onChange={this.update('username')} value={this.state.username}/>
        </label>
    } else {

    }
  
    return (
      <div className="auth-board-layout">
        <div className="left-panel">
          <div className="onboard-image-panel">
              {/* IMAGE GOES HERE */}
          </div>
        <div className="right-panel">
          <header>
            <a className="logo" href="/">
              <img src="../../../app/assets/images/sleeper_logo_black_2.png" alt=""/> 
            </a>
          </header>
          <div className="auth-content-container">
            <div className="header container">
              <div className="onboard-header-text">
                <div className="header">{this.props.formType}</div>
                <div className="right-header-action">{this.props.navLink}</div>
              </div>
              <div className="onboard-desc-text">{this.props.onboardText}</div>
            </div>
            <div className="auth-form">
              <form onSubmit={this.handleSubmit}>
                <div className="box-text-input">
                {signUpInput}
                </div>
                <div className="box-text-input">
                  <label>email
                    <input type="text" placeholder={this.props.emailPlace} onChange={this.update('email')} value={this.state.email} />
                  </label>
                </div>
                <div className="box-text-input">
                  <label>password
                    <input type="password" placeholder={this.props.passwordPlace} onChange={this.update('password')} value={this.state.password} />
                  </label> 
                </div>
                <div className="submit-button">
                  <button className="app-button-gradient" type="submit" value={this.props.formType}></button>
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