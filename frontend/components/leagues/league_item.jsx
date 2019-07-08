import React from 'react';

const LeagueItem = (props) => {
  return (
    <div className="league-item">
      <div className="league-avatar"><img src={props.avatar} alt=""/></div>
      <div>
        <div className="league-title">{props.name}</div>
        <div className="league.teams">{props.teams}-Team League</div>
      </div>
    </div>
  )
}

export default LeagueItem;