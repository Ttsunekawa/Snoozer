import React from 'react';
import MatchUpItem from './matchup_items';

class Standings extends React.Component {
  constructor(props){
    super(props)

    this.state = { selectedIndex: null}
  }

  render() {
    
    if (this.props.teams[0]) {
      let teamItems = [];
      let users_team;
      const teams = this.props.teams;
      let last_team;

      for (let i = 0; i < teams.length; i++) {
        if(parseInt(teams[i].user_id) === this.props.currentUser.id){
          
          users_team = teams.splice(i, 1);
          last_team = teams.splice(teams.length-1, 1)

          teamItems.push(
            <MatchUpItem team1={users_team[0]} team2={last_team[0]} />
          )
        };
      };

      for (let n = 0; n < teams.length; n+=2) {
        teamItems.push(
          <MatchUpItem team1={teams[n]} team2={teams[n+1]} />
          );
        };
    } else {
      teamMatchUps = <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    };

    return (
      <div>
        <div className="league-standings-panel">
          <div className="league-matchups-label">
            <div>
              League matchups
            </div>
            <div className="teams-index-container">
              {/* {teamItems} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export default Standings;