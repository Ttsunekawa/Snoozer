import React from 'react';
import Logo from '../logo/logo';
import LeagueItem from './league_item';
import Create from './create_button';
import { Link } from 'react-router-dom';

class LeftPanel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: null
    }
  }
  
  componentDidUpdate() {
    console.log(this.state);
  }
  
  toggleRadioBtn(index) {
    this.setState({
      selectedIndex: index,
    });
  }

    render() {
    let leagueItems;
    if(this.props.leagues[0]){
      const leagues = this.props.leagues;
      leagueItems = leagues.map((league, i) => (
        <LeagueItem 
        handler={this.toggleRadioBtn.bind(this)}
        isChecked={(this.state.selectedIndex == i+1)}
        name={league.name}
        teams={league.amount_of_teams}
        commissioner={league.commissioner}
        avatar={league.image_url}
        key={league.id}
        index={i+1}
        leagueType={league.leagueType}
        scoringType={league.scoringType}
        id={league.id}
        />
      ))
    } else {
      leagueItems = <div></div>
    }

    let create;

    if(this.props.location.pathname === "/leagues/create"){
      create = 
        <div className="league-create-container selected">
          <img src="https://sleepercdn.com/images/v2/icons/create_league_trophy2.png" />
          <div>
            <div className="title">2019 Leagues are open!</div>
            <div className="description">Create 2019 League</div>
          </div>
        </div>
    } else {
      create = <Create handler={this.toggleRadioBtn.bind(this)} />
    }

    return (
    <div className="left-panel-header-container">
      <a href="/"className="left-panel-logo-container">
        <div className="left-panel-logo" >
          <img src="https://i.ibb.co/8x6GDxf/og-logo-66ee2f04c1dc70ba8cb5ec9f780990d1.png" alt="" />
        </div>
        <div className="left-panel-logo-header"><h1>snoozer</h1></div>
      </a>
      <div className="left-panel-header">
        Welcome, {this.props.currentUser.username}
      </div>
      <div className="leagues-label">LEAGUES</div>
      <div className="left-panel-body">
        {create}
      </div>
      {leagueItems}
    </div>
    );
  };
}

export default LeftPanel;