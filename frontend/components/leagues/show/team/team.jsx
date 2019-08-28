import React from 'react';


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
      <div className="team-main-container">
        <div className="actions">
          <div className="btn">
            <img className="button-icon" src="https://sleepercdn.com/images/v2/button/add_player_button.png"></img>
            Add Players
          </div>
          <div className="btn">
            <img className="button-icon" src="https://sleepercdn.com/images/v2/button/drop_player_button.png"></img>
            Drop Players
          </div>
        </div>
      </div>
    )
  }



}

export default Team;