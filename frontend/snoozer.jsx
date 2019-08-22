import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createLeague, deleteLeague, fetchLeagues } from './actions/league_actions';
import { addPlayer, deletePlayer, fetchPlayers } from './actions/player_actions';

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
  window.createLeague = createLeague;
  window.deleteLeague = deleteLeague;
  window.addPlayer = addPlayer;
  window.deletePlayer = deletePlayer;
  window.fetchPlayers = fetchPlayers;
  // end testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})
