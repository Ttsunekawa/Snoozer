import React from 'react';

class LeaguesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount_of_teams: "",
      image_url: "",
      user_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoSubmit = this.demoSubmit.bind(this);
    // this.emailTyper = this.emailTyper.bind(this);
    // this.passwordTyper = this.passwordTyper.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const league = Object.assign({}, this.state);
    this.props.createLeague(league);
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

  render() {

    return (
      <div className="create-league-main-container">
        <div className="create-league-panel">
          <div className="header">
            <div className="header-title">Create a League for 2019</div>
            <div className="header-text">Don't worry, you'll be able to make changes to all settings later></div>
          </div>
          <div className="double-column">
            <div className="left-column">
              <form onSubmit={this.handleSubmit}></form>
            </div>
            <div className="right-column">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeaguesForm;