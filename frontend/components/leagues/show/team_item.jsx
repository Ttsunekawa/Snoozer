import React from 'react';

class TeamItem extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {
    console.log(this.props.owner)
    return (
      <div className="team-container">
        <div className="roster-list-num">{this.props.index}.</div>
        <div className="team-details">
          <div><img className="team-avatar" src={this.props.avatar}/></div>
          <div className="team-name-owner">
            <div className="team-name">{this.props.name}</div>
            <div className="team-owner">{this.props.owner}</div>
          </div>
        </div>
      </div>
    );
  };
}

export default TeamItem;