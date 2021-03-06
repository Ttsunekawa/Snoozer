import React from 'react';
import { Link } from 'react-router-dom';

class LeagueItem extends React.Component {
  constructor(props) {
    super(props);
  };
  
  handleClick(){
    this.props.handler(this.props.index);
  };
  
  render() {
    let link;
    if(this.props.teams !== this.props.user_teams){
      link = `/leagues/${this.props.id}/predraft`
    } else { 
      link  = `/leagues/${this.props.id}`
  }
    return (
      <Link className="leagues-link" to={link}>
        <div className={this.props.isChecked ? "league-item checked" : "league-item"} onClick={this.handleClick.bind(this)} >
          <div className="league-avatar"><img src={this.props.avatar} alt=""/></div>
          <div>
              <div className="league-title">{this.props.name}</div>
              <div className="league-teams">{this.props.teams}-Team League</div>
          </div>
          <div className="league-teams">{this.props.scoringType}</div>
        </div>
      </Link>
    );
  };
}

export default LeagueItem;