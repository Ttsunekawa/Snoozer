import React from 'react';
import AddPlayerModal from './add_player_modal';
import RemovePlayerModal from './remove_player_modal';


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
            
          </div>
        </div>
      </div>
    )
  }



}

export default Team;