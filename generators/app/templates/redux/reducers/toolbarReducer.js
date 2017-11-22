export const initialState = {
  buttons: {
    edit: false
  },
  history: []
};

export default function toolbarReducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'UPDATE_TOOLBAR':
      return Object.assign({}, state, action.payload);
      break;

    default:
      return state;
  }
}