import React from 'react';
import Logo from '../logo/logo';
import LeagueItem from './league_item';
import { Link } from 'react-router-dom';

const LeftPanel = (props, ownProps) => {
  if(props.leagues[0] !== null){
    const leagues = props.leagues;
    const leagueItems = leagues.map(league => (
      <LeagueItem 
      name={league.name}
      teams={league.amount_of_teams}
      commissioner={league.commissioner}
      avatar={league.image_url}
      key={league.id}
      />
    ))


    return (
    <div className="left-panel-header-container">
      <Logo className="left-panel-logo" />
      <div className="left-panel-header">
        Welcome, {props.currentUser.username}
      </div>
      <div className="left-panel-body">
        <Link to="leagues/create" className="league-create-container">
          <img src="https://sleepercdn.com/images/v2/icons/create_league_trophy2.png"/>
          <div>
            <div className="title">2019 Leagues are open!</div>
            <div className="description">Create 2019 League</div>
          </div>
        </Link>
        {leagueItems}
      </div>
    </div>
    );
  } else {
    return <div className="lds-hourglass"></div>
  }
};

export default LeftPanel