import React from 'react';
import TeamSelect from './teams_select';
import ScoringFormatRadio from './scoring_format';

class LeaguesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount_of_teams: "",
      image_url: "",
      user_id: this.props.currentUser.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoSubmit = this.demoSubmit.bind(this);
    // this.emailTyper = this.emailTyper.bind(this);
    // this.passwordTyper = this.passwordTyper.bind(this);
    this.handleTeamsChange = this.handleTeamsChange.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }

  handleTeamsChange(value) {
    this.setState({ amount_of_teams: value })
    console.log(this.state)
  }

  // handleLeagueType(value) {
  //   this.setState({ leagueType: value })
  // }

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
            <div className="header-text">Don't worry, you'll be able to make changes to all settings later</div>
          </div>
          <div className="double-column">
            <form className="left-column-form" onSubmit={this.handleSubmit}>
                <div className="form-section">
                  <label className="label">League Name</label>
                  <input className="input-element" type="text" placeholder="Enter the name of your league"/>
                </div>
                <div className="form-section">
                  <label className="label" >Teams</label>
                  <TeamSelect handleTeamsChange={this.handleTeamsChange}/>
                </div> 
                <div className="form-section">
                  <label className="scoring-radio-group">Scoring Format</label>
                  <ScoringFormatRadio />
                </div>
                <div className="form-section">

                </div>
                <div className="form-section">

                </div>
                <div className="form-section">

                </div>
            </form>
            <div className="right-column">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeaguesForm;