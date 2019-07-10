

const invitesReducer = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_INVITE":
      return action.invite
    default:
      return state
  }
}

export default invitesReducer;

