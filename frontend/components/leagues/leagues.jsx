import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LeftPanelContainer from './left_panel_container';
import RightPanelContainer from './right_panel_container'
import LeaguesFormContainer from './leagues_form_container';

class Leagues extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchLeagues()
  }
  
  render () {
    return (
      <div className="panel-layout">
        <div className="left-panel">
            <Route path="/leagues" component={LeftPanelContainer} />
          </div>
          <div className="right-panel">
            <Route path="/leagues/create" component={LeaguesFormContainer} />
          </div>
      </div>
    )
  }
}

export default Leagues;