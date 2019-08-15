import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LeftPanelContainer from './left_panel_container';
import LeaguesLoginContainer from './form/leagues_login_container';
import PredraftContainer from './predraft/predraft_container';
import StandingsContainer from './show/standings/standings_container';
import LeagueNavContainer from './show/league_nav_container';
import { ProtectedRoute } from '../../util/route_util'

class Leagues extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if(this.props.fetchInvite){
      this.props.history.push(this.props.match.url);
      this.props.fetchInvite(this.props.match.params.id);
      this.props.history.push('/leagues');
      window.location.reload();
    } else if (this.props.fetchLeagues) {
      this.props.fetchLeagues().then(() =>{
        this.props.history.push('/leagues');
      });
    };
  };

  render () {
    let nav;

    if(this.props.location.pathname === "/leagues/create" || this.props.location.pathname.includes("predraft")) {
      nav = null
    } else { nav = <Route path="/leagues/:leagueId/" component={LeagueNavContainer} />  }


    if(this.props.leagues !== undefined && this.props.leagues[0] !== null) {
      return (
        <div className="main-leagues-container">
          <div className="left-panel-container">
            <Route path="/leagues" component={LeftPanelContainer} />
          </div>

          <div className="center-panel">
              {nav}
            <Switch>
              <Route exact path="/leagues/create" component={LeaguesLoginContainer} />
              <Route path="/leagues/:leagueId/standings" component={StandingsContainer} />
              <Route exact path="/leagues/:leagueId/predraft" component={PredraftContainer} />
              {/* <Route exact path="/leagues/:leagueId/" component={StandingsContainer} /> */}
              <Route exact path="/leagues/:leagueId" component={PredraftContainer} />
            </Switch>
          </div>
          <div className="auth-board-layout show">
            <div className="left-panel show">
              <div className="onboard-image-panel">
                <div className="content-container">
                  <div>
                    <video autoPlay="on" loop="on" src="https://sleepercdn.com/videos/draftboard.mp4" data-vscid="oexb3kxio"></video>
                  </div>
                </div>
                <div className="title-continaer">
                  <h1 className="left-panel-title">Chat Box Here!</h1>
                  <p className="left-panel-description">Eventually....</p>
                </div>
              </div>
            </div>
            <div className="right-panel">
              {/* Github/linkedin and stuff */}
              <div className="social-medias">
                <a href="https://github.com/Ttsunekawa" target="_blank" className="git">git</a>
                <a href="https://www.linkedin.com/in/tyler-tsunekawa-8539a618b/" target="_blank" className="linkedin">in</a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // show = <Route path="" /> 
      return (<div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>)
    };
  };
};

export default Leagues;