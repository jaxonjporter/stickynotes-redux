const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.note
    case 'ADD_NOTE':
      return [action.note, ...state];
    case 'DELETE_NOTE':
      return state.filter( note => {
        if (note.id !== action.id )
          return note
      })
    case 'EDIT_NOTE':

    default:
      return state
  }
}

export default notes;