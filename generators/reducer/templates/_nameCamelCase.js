export const initialState = {
  items: []
};

export default function reducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'ADD_<%= nameConstant %>':
      return [ ...state, Object.assign(
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        },
        action.payload
      )]

    case 'UPDATE_<%= nameConstant %>':
      return state.map(item =>
        item.id === action.id ?
          { ...item, action.payload } :
          item
      )
  }
}