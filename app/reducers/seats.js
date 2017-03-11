const seats = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SEAT':
      return Object.assign({}, state, {
      	[action.seatId]: action.seat
      })
    default:
      return state
  }
}

export default seats