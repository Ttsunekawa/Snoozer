import React from 'react';
import { Link } from 'react-router-dom'

class Create extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.handler(0);
  }


  render() {
    return(
    <Link onClick={this.handleClick.bind(this)} to="/leagues/create" className="league-create-container">
      <img src="https://sleepercdn.com/images/v2/icons/create_league_trophy2.png" />
      <div>
        <div className="title">2019 Leagues are open!</div>
        <div className="description">Create 2019 League</div>
      </div>
    </Link>
    )
  }
}

export default Create;