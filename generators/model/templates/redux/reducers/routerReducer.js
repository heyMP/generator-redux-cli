export const initialState = {
  history: []
};

export default function reducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'UPDATE_ROUTE':
      var history = state.history.slice(0);
      history.push(action.payload)
      return Object.assign({}, state, { history: history });

    default:
      return state
  }
}