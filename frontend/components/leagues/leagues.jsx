import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LeftPanelContainer from './left_panel_container';
import LeaguesLoginContainer from './form/leagues_login_container';

class Leagues extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchLeagues()
  }
  
  render () {
    return (
    <div className="main-leagues-container">
      <div className="left-panel-container">
        <Route path="/leagues" component={LeftPanelContainer} />
      </div>
    
      <div className="center-panel">
        <Route path="/leagues/create" component={LeaguesLoginContainer} />
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