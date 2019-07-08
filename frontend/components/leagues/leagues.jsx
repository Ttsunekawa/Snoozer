import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LeftPanelContainer from './left_panel_container';
import LeaguesFormContainer from './form/leagues_form_container';

class Leagues extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchLeagues()
  }
  
  render () {
    return (
      <div className="right-panel">
        <Route path="/leagues/create" component={LeaguesFormContainer} />
      </div>
    )
  }
}

export default Leagues;