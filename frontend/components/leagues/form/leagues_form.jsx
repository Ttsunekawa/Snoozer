import React from 'react';
import TeamSelect from './teams_select';
import ScoringFormatRadio from './scoring_format_radio';
import LeagueTypeRadio from './league_type_radio';
import { Redirect } from 'react-router-dom';

class LeaguesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      amount_of_teams: this.props.amount_of_teams,
      image_url: "https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d",
      user_id: this.props.user_id,
      scoringType: this.props.scoringType,
      leagueType: this.props.leagueType,
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.demoSubmit = this.demoSubmit.bind(this);
    // this.emailTyper = this.emailTyper.bind(this);
    // this.passwordTyper = this.passwordTyper.bind(this);
    this.handleTeamsChange = this.handleTeamsChange.bind(this);
    this.handleScoringType = this.handleScoringType.bind(this);
    this.handleLeagueType = this.handleLeagueType.bind(this);
  }

  componentWillMount() {
    this.props.clearErrors();
  }


  handleTeamsChange(value) {
    this.setState({ amount_of_teams: value })
  }

  handleScoringType(value) {
    this.setState({ scoringType: value })
  }
  
  handleLeagueType(value) {
    this.setState({ leagueType: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const league = Object.assign({}, this.state);
    this.props.submitAction(league);
    this.props.history.push('/leagues');
  };

  renderErrors() {
    return (
      <div className="errors-container">
        {this.props.errors.map((error, i) => (
          <i key={`error-${i}`}>
            {error}
          </i>
        ))}
      </div>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let header;

    if(this.props.formType === "CREATE") {
      header = <div className="header">
        <div className="header-title">Create a League for 2019</div>
        <div className="header-text">Don't worry, you'll be able to make changes to all settings later</div>
      </div>
    } else {
      header = <div className="header">
        <div className="header-title">Edit your League</div>
        <div className="header-text"></div>
      </div>
    }

    return (
      <div className="create-league-main-container">
        <div className="create-league-panel">
          {header}
          {this.renderErrors()}
          <div className="double-column">
            <form className="left-column-form">
                <div className="form-section">
                  <label className="label">League Name</label>
                  <input onChange={this.update('name')} className="input-element" type="text" placeholder="Enter the name of your league" value={this.state.name}/>
                </div>
                <div className="form-section">
                  <label className="label" >Teams</label>
                  <TeamSelect currentIndex={this.state.amount_of_teams} handleTeamsChange={this.handleTeamsChange}/>
                </div> 
                <div className="form-section">
                  <label className="scoring-radio-group">Scoring Format</label>
                  <ScoringFormatRadio currentIndex={this.state.scoringType} handleScoringType={this.handleScoringType} />
                </div>
                <div className="form-section">
                  <label className="league-type-radio">League Type</label>
                  <LeagueTypeRadio currentIndex={this.state.leagueType} handleLeagueType={this.handleLeagueType} />
                </div>
                <div className="form-section">
                  <label className="label">OPTIONAL Logo URL</label>
                  <input onChange={this.update('image_url')} className="input-element" placeholder="Example: https://www.myawesomepicture.com" type="text" value ={this.state.image_url}/>
                </div>
                <div className="form-section">
                  <a onClick={this.handleSubmit} className="form-elements-button">
                    <button className="submit-button">{this.props.formType}</button>
                  </a>
                  <div className="disclaimer">Rosters and other scoring settings etc. can be set later</div>
                </div>
            </form>
            <div className="right-column">
              <img src="https://sleepercdn.com/images/landing/v3/features/bragging-17d83a32e8cd9b32ab6afce13baa093d.png?vsn=d" alt=""/>
              <img src="https://sleepercdn.com/images/landing/v3/features/competition-d55b1d4e518acf4a5b25768fc5a30ea4.png?vsn=d" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeaguesForm;