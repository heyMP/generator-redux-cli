import {store} from '../store/createStore.js'

export const routerActions = {
  updateRoute(route) {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'UPDATE_ROUTE',
        payload: route
      });
    });
  },

  affiliateItemPage(id) {
    this.updateRoute({ path: `/affiliates/item/${id}` });
  }
}
