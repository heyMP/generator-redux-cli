class toolbarActions {
  static updateToolbar(toolbar) {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'UPDATE_TOOLBAR',
        payload: toolbar
      });
    });
  }

  static showEditButton() {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'UPDATE_TOOLBAR',
        payload: {
          buttons: {
            edit: true
          }
        }
      });
    });
  }

  static hideEditButton() {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'UPDATE_TOOLBAR',
        payload: {
          buttons: {
            edit: false
          }
        }
      });
    });
  }
}