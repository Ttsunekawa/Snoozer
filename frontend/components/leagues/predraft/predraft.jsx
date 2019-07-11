import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import TeamItem from '../show/team_item';
import { Redirect } from 'react-router-dom'

class Predraft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "localhost:3000/#/invites/" + this.props.invite,
      copied: false,
      button: <span className="form-elements button">Link</span>
    };
  }
    

  render() {
      let teamItems;
      
      if (this.props.teams[0]) {
        if (Object.keys(this.props.owners).length === this.props.teams.length) { this.props.history.push("/leagues")}
        const teams = this.props.teams;
        teamItems = teams.map((team, i) => (
          <TeamItem
            name={team.name}
            avatar={team.image_url}
            key={team.id}
            index={i+1}
            id={team.id}
            owner={this.props.owners[team.user_id]}
          />
        ))
      } else {
        teamItems = <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      }

    return (
      <div className="predraft-panel">
        <div className="predraft-panel-header">
          <div className="name-container">
            <div className="name">Pre-Draft</div>
            <div className="description">{this.props.teams.length}-Team {this.props.scoringType}</div>
          </div>
          <div className="league-avatar"><img src={this.props.image_url}/></div>
        </div>
          <div className="invite-link-container">
            <div className="invite-link">
              <div className="invite-url">
                localhost:3000/#/invites/${this.props.invite}
              </div>
              <div className="copy">
                  <i className="fa fa-clipboard">
                  </i>
              </div>
            </div>
            <CopyToClipboard text={this.state.value}
              onCopy={() => this.setState({ copied: true, button: <div></div> })}>
              {this.state.button}
            </CopyToClipboard>
            {this.state.copied ? <span className="form-elements button small">Copied</span> : null}
          </div>
          <div className="invite-description">
            Give this link to your friends and they'll be able to instantly join your league on web or mobile.
          </div>
          <div className="teams-label">
            <div>
              Teams
            </div>
            <div>

            </div>

            </div>
          <div className="teams-index-container">
            {teamItems}
          </div>
      </div>
    );
  }
}

export default Predraft;