import React, { Component } from 'react'

export default class TeamRoster extends Component {
  constructor(props) {
    super(props)

    this.roster = this.props.roster;
    this.rosterItems = [];
  }

  getRoster() {
    this.rosterItems = this.roster.slice()
    rosterItems.map(pos => {
      <RosterItem
        position={pos}
        
      />
    })
  }

  render() {

    debugger
    return (
      <div className="team-roster">
        <div className="team-roster-header">Starters</div>
        <div className="team-roster-helper">Click on position buttons to update your lineup</div>
        
      </div>
    )
  }
}
