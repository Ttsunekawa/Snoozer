import React from 'react';
import MatchUpItem from './matchup_items';

class Standings extends React.Component {
  constructor(props){
    super(props)

    this.state = { selectedIndex: null}
  }

  render() {
    let teamItems = [];
    let users_team;
    let last_team;
    if (this.props.teams[0]) {
      const teams = this.props.teams;

      for (let i = 0; i < teams.length; i++) {
        if(parseInt(teams[i].user_id) === this.props.currentUser.id){
          
          users_team = teams.splice(i, 1);
          last_team = teams.splice(teams.length-1, 1);
          let users_id = users_team[0].user_id;
          let last_id = last_team[0].user_id;

          teamItems.push(
            <MatchUpItem 
              key={users_team[0].user_id} 
              owner1={this.props.owners[users_id]} 
              team1={users_team[0]} 
              owner2={this.props.owners[last_id]}
              team2={last_team[0]} />
          )
        };
      };

      for (let n = 0; n < teams.length; n+=2) {
        let user1Id = teams[n].user_id;
        let user2Id = teams[n+1].user_id;
        teamItems.push(
          <MatchUpItem 
            key={teams[n].user_id} 
            team1={teams[n]}
            owner1={this.props.owners[user1Id]}
            team2={teams[n+1]}
            owner2={this.props.owners[user2Id]}
             />
          );
        };

        teams.push(users_team[0]);
        teams.push(last_team[0]);
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
          </div>
          <div className="teams-index-container">
            {teamItems}
          </div>
        </div>
      </div>
    );
  }
}
  
export default Standings;