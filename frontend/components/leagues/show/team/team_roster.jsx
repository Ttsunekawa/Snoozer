import React, { Component } from 'react'
import PlayerItem from '../../../players/player_item';
import sort from 'fast-sort';

export default class TeamRoster extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let ownTeamItems;
    let freeAgents;

    if (Object.keys(this.props.players).length !== 0) {

      ownTeamItems = this.props.players.map(player => {
        return <PlayerItem 
        key={player.id}
        id={player.id}
        first_name={player.first_name}
        last_name={player.last_name}
        position={player.position}
        team={player.team}
        action={this.props.removePlayer}
        league={this.props.league}
        />
      })
    }

     if (Object.keys(this.props.free_agents).length !== 0) {
      freeAgents = this.props.free_agents.map(player => {
        return <PlayerItem 
        key={player.id}
        id={player.id}
        first_name={player.first_name}
        last_name={player.last_name}
        position={player.position}
        team={player.team}
        action={this.props.addPlayer}
        league={this.props.league}
        />
      })
    }

    return (
      <div className="team-roster">
        <div className="players-team-header">Your Team</div>
        <div className="team-roster-helper">Click on the - button to remove a player from your team!</div>
        <div className="players-team">
          {ownTeamItems}
        </div>
        <div className="team-roster-header">Free Agents</div>
        <div className="team-roster-helper">Click on the + button to add them to your team!</div>
        <div className="free-agents">
          {freeAgents}
        </div>

      </div>
    )
  }
}
