const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.note
    case 'ADD_NOTE':
      return [action.note, ...state];
    default:
      return state
  }
}

export default notes;