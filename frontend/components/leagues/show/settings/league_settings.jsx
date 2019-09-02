import React, { Component } from 'react'

export class LeagueSettings extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteLeague(this.props.league.id);
    this.props.history.push('/leagues');
  };

  render() {
    return (
      <div className="league-settings-container">
        <button onClick={this.handleClick} className="form-elements-button">Delete League</button>
      </div>
    )
  }
}

export default LeagueSettings
