import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../../components/logo/logo';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
    this.emailTyper = this.emailTyper.bind(this);
    this.passwordTyper = this.passwordTyper.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (!this.props.nextPath) {
      this.props.processForm(user)
        .then(() => this.props.history.push('/leagues'));
        window.location.reload();
    } else {
      this.props.processForm(user)
        .then(() => this.props.history.push(this.props.nextPath) );
        window.location.reload();
    }
  }

  

  demoSubmit() {
    this.state = { email: "tylertsunekawa@gmail.com", password: "password123123"};
    if (!this.props.nextPath) {
      this.props.processForm(this.state)
        .then(() => this.props.history.push('/leagues'))
    } else {
      this.props.processForm(this.state)
        .then(() => this.props.history.push(this.props.nextPath))
    }
  }
  
  emailTyper() {
    let i = 0;
    let email = 'tylertsunekawa@gmail.com'
    const speed = 75; /* The speed/duration of the effect in milliseconds */
    let email_field = document.getElementById("input-email")
    email_field.value = ""

    const typeWriter = () => {
      if (i < email.length) {
        email_field.value += email.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    
    typeWriter();
    setTimeout(this.passwordTyper, 1000);
    setTimeout(this.demoSubmit, 2100);
  };

  passwordTyper() {
    let i = 0;
    const password = 'password123123'
    const speed = 75; /* The speed/duration of the effect in milliseconds */
    let password_field = document.getElementById("input-password")
    password_field.value = ""

    const typeWriter = () => {
      if (i < password.length) {
        password_field.value += password.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter()
  };

  renderErrors() {
    return (
      <ul className="errors-container">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let signUpInput;
    let demoUser;

    if(this.props.formType === 'Sign Up') {
      signUpInput = 
        <div className="box-text-input">
          <label htmlFor="input-username">username</label>
          <div className="input-container">
            <input id="input-username" type="text" className="box-text-input" placeholder="Enter new username" onChange={this.update('username')} value={this.state.username}/>
          </div>
        </div>
    }

    if(this.props.formType === 'Login') {
      demoUser = 
      <div className="demouser-submit-button">
        <div className="app-button-gradient" onClick={this.emailTyper}>Demo User</div>
      </div>
    }

    
  
    return (
      <div className="session-background">
        <div className="auth-board-layout">
          <div className="left-panel">
            <div className="onboard-image-panel">
              <div className="content-container">
                <div>
                  <video autoPlay="on" loop="on" src="https://sleepercdn.com/videos/draftboard.mp4" data-vscid="oexb3kxio"></video>
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
              <Logo formType={this.props.formType}/>
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
                {this.renderErrors()}
                <form autoComplete="off">
                  {signUpInput}
                  <div className="box-text-input">
                    <label htmlFor="email">email</label>
                    <div className="input-container">
                        <input autoComplete="off" id="input-email" type="email" className="box-text-input"  placeholder={this.props.emailPlace} onChange={this.update('email')} value={this.state.email} />
                    </div>
                  </div>
                  <div className="box-text-input">
                    <label htmlFor="input-password">password</label>
                    <div className="input-container">
                        <input id="input-password" type="password" className="box-text-input"  placeholder={this.props.passwordPlace} onChange={this.update('password')} value={this.state.password} />
                    </div>
                  </div>
                  <div className="button-container">
                    <div className="submit-button"> 
                      <input onClick={this.handleSubmit} type="submit" className="app-button-gradient" value={this.props.formType}/>
                    </div>
                    {demoUser}
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