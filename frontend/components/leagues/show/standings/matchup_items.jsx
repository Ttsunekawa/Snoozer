import React from 'react';

class MatchUpItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      team1: this.randomIntFromInterval(110,150),
      team2: this.randomIntFromInterval(110,150)
    })

    this.randomIntFromInterval.bind(this);
  };

  randomIntFromInterval(min, max) // min and max included
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}


  render() {
    let team1Percent = (this.state.team1 / (this.state.team1 + this.state.team2) * 100)
    let team2Percent = (this.state.team2 / (this.state.team1 + this.state.team2) * 100)

    const team1Style = {
      width: `${team1Percent}%`,
      height: `7px`
    }
    const team2Style = {
      width: `${team2Percent}%`,
      height: `7px`
    }

    return (
      <div className="league-matchup-row-item">
        <div className="team-owner-matchup-row-wrapper">
          <div className="team-owner-matchup-row">
            <div className="user">
              <div className="team-owner-matchup-roster">
                <div className="team-owner">
                  <div className="avatar-container">
                    <img src={this.props.owner1.image_url}></img>
                  </div>
                  <div className="meta">
                    <div className="name">{this.props.owner1}</div>
                    <div className="description">{this.props.team1.name}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="roster-score-and-projection">
              <div className="score">-</div>
              <div className="projection">{this.state.team1}</div>
            </div>
            <div className="position-label"></div>
            <div className="roster-score-and-projection">
              <div className="score">-</div>
              <div className="projection">{this.state.team2}</div>
            </div>
            <div className="user reverse">
              <div className="team-owner-matchup-roster">
                <div className="team-owner">
                  <div className="avatar-container">
                    <img src={this.props.owner2.image_url}></img>
                  </div>
                  <div className="meta">
                    <div className="name">{this.props.owner2}</div>
                    <div className="description">{this.props.team2.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="win-chance-bar">
            <div className="percentage-wrap">
              <div className="left" style={team1Style}></div>
              <div className="right" style={team2Style}></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default MatchUpItem;