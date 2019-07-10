import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LeftPanelContainer from './left_panel_container';
import LeaguesLoginContainer from './form/leagues_login_container';

class Leagues extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(this.props.fetchInvite){
      this.props.fetchInvite(this.props.match.params.id);
      this.props.history.push('/leagues')
    } else if (this.props.fetchLeagues) {
      this.props.fetchLeagues();
    } else {
      <Redirect to="/"></Redirect>
    }
  }
  
  render () {
    return (
    <div className="main-leagues-container">
      <div className="left-panel-container">
        <Route path="/leagues" component={LeftPanelContainer} />
      </div>
    
      <div className="center-panel">
        {/* <Route path="/leagues/:leagueId" componenet={LeagueShowContainer} /> */}
        <Route exact path="/leagues/create" component={LeaguesLoginContainer} />
      </div>
      <div className="right-panel">
        {/* Github/linkedin and stuff */}
        <div className="social-medias">
          <div className="git">git</div>
          <div className="linkedin">in</div>
        </div>
      </div>
    </div>
    )
  }
}

export default Leagues;