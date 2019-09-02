import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavItem from './nav_item';

class LeagueNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedIndex: null }
  }

  toggleRadioBtn(index) {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    let LeagueNav;
    const league = this.props.league;
    let headers = ["My Team", "League", "Settings"];
    let description = ["Edit Roster", "Matchups", "For League"];
    let url = [
      `/leagues/${league.id}/team`,
      `/leagues/${league.id}/matchups`,
      `/leagues/${league.id}/settings`];

    LeagueNav = headers.map((header, i) => (
      <NavItem
        handler={this.toggleRadioBtn.bind(this)}
        isChecked={(this.state.selectedIndex == i)}
        key={i}
        index={i}
        header={headers[i]}
        description={description[i]}
        url={url[i]}
      />
    )
    );

    return (
      <div className="predraft-panel-container">
        <div className="predraft-panel-header">
          <div className="name-container">
            <div className="name">{this.props.leagueName}</div>
            <div className="description">{this.props.teams.length}-Team {this.props.scoringType}</div>
          </div>
          <div className="league-avatar"><img src={this.props.image_url} /></div>
        </div>
        <div className="panel-tabs" >
          <div className="tabs-container">
            {LeagueNav}
          </div>
        </div>
      </div>
    )
  }
}

export default LeagueNav;