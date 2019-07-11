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
    let headers = ["Matchup", "My Team", "League", "Settings"];
    let description = ["Live Scoring", "Edit Roster", "Standings", "For League"];
    let url = [
      `/leagues/${league.id}/match`,
      `/leagues/${league.id}/team`,
      `/leagues/${league.id}/standings`,
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
      <div className="panel-tabs" >
        <div className="tabs-container">
          {LeagueNav}
        </div>
      </div>
    )
  }
}

export default LeagueNav;