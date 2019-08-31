import React from 'react';
import AddPlayerModal from './add_player_modal';
import RemovePlayerModal from './remove_player_modal';
import TeamRoster from './team_roster';


class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedIndex: null }
  }

  componentDidMount() {
    this.props.fetchPlayers(this.props.league.id)
  }


  render() {
    return(
      <div>
        <div className="team-main-container">
          <div className="actions">
            <AddPlayerModal />
            <RemovePlayerModal />
          </div>
          <div className="team-header">
            <div className="team-owner">
              <div className="avatar-container">
                <img src={this.props.team.image_url} alt=""/>
              </div>
              <div className="meta">
                <div className="name">{this.props.currentUser.username}</div>
              </div>
            </div>
          </div>
          <TeamRoster roster={this.props.roster} />
        </div>
      </div>
    )
  }



}

export default Team;