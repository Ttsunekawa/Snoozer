import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LeagueNavContainer from './league_nav_container';

class LeagueShow extends React.Component {
  constructor(props){
    super(props)

    this.state = { selectedIndex: null}
  }

  render() {
    return (
      <div className="show-header">
        <Route path="/" component={LeagueNavContainer} />
      </div>
    
    )
  }

}
  
export default LeagueShow;