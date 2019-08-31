import React, { Component } from 'react'

export default class PlayerItem extends Component {
  constructor(props) {
    super(props)

    this.randomIntFromInterval = this.randomIntFromInterval.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  randomIntFromInterval(min, max) // min and max included
  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  handleClick(e) {
    e.preventDefault();

  }

  render() {
    let actionPic;
    if (this.props.action.name === "removePlayer") {
      actionPic = "https://sleepercdn.com/images/v2/button/drop_player_button.png"
    } else {
      actionPic = "https://sleepercdn.com/images/v2/button/add_player_button.png"
    }

   

    return (
      <div className="player-item">
        <div className="position-container">
          <div className={this.props.position.toLowerCase()}>{this.props.position}</div>
        </div>
        <img className="player-avatar" src="https://sleepercdn.com/images/logos/og_logo-0fd5b06cb8b04f3eb1997ccc3f7f5201.png?vsn=d" alt=""/>
        <div className="player-meta">
          <div className="player-name">{this.props.first_name} {this.props.last_name}</div>
          <div className="player-pos">{this.props.position} - {this.props.team}</div>
        </div>  
        <div className="player-projection">
          <div>Projection</div>
          {this.randomIntFromInterval(1.0,23.0)}
        </div>
        <div onClick={() => this.handleClick} className="player-action">
          <img className="player-action-picture" src={actionPic}></img>
        </div>
      </div>
    )
  }
}
