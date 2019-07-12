import React from 'react';

class MatchUpItem extends React.Component {
  constructor(props) {
    super(props);
  };


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

            </div>
            <div><img className="team-avatar" src={this.props.avatar} /></div>
            <div className="team-name-owner">
              <div className="team-name">{this.props.name}</div>
              <div className="team-owner">{this.props.owner}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default MatchUpItem;