import React from 'react';

class MatchUpItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      team1: this.randomIntFromInterval(130,150),
      team2: this.randomIntFromInterval(130,150)
    })

    this.randomIntFromInterval.bind(this);
  };

  randomIntFromInterval(min, max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}


  render() {
    return (
      <div className="league-matchup-row-item">
        <div className="team-owner-matchup-row-wrapper">
          <div className="team-owner-matchup-row">
            <div className="user">
              <div className="team-owner-matchup-roster">
                <div className="team-owner">
                  <div className="avatar-container">
                    <img src={this.props.avatar}></img>
                  </div>
                  <div className="meta">
                    <div className="name">{this.props.owner}</div>
                    <div className="description">{this.props.name}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-label"></div>
            <div className="user reverse">
              <div className="team-owner-matchup-roster">
                <div className="team-owner">
                  <div className="avatar-container">
                    <img src={this.props.avatar}></img>
                  </div>
                  <div className="meta">
                    <div className="name">{this.props.owner}</div>
                    <div className="description">{this.props.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="win-chance-bar">
            <div className="percentage-wrap">
              <div className="percentage">
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default MatchUpItem;