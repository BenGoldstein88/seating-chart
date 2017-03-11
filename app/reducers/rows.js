const rows = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ROW':
      return Object.assign({}, state, {
      	[action.rowId]: action.row
      })
    default:
      return state
  }
}

export default rows