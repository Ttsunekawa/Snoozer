import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createLeague, deleteLeague, fetchLeagues } from './actions/league_actions';
import { addPlayer, removePlayer } from './util/player_api_util';

document.addEventListener('DOMContentLoaded', () => {

  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.createLeague = createLeague;
  // window.deleteLeague - deleteLeague;
  window.addPlayer = addPlayer;
  window.removePlayer = removePlayer;
  // end testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})
