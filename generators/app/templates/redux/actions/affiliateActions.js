import {store} from '../store/createStore';

export const affiliateActions = {
  fetchAffiliates() {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'FETCH_AFFILIATES_LOADING'
      });
      return window.fetch('http://localhost:1337/api/affiliates')
        .then((response) => {
          response.json().then(data => {
            dispatch({
              type: 'FETCH_AFFILIATES_SUCCESS',
              payload: data
            })
          })
        });
    });
  },

  fetchAffiliate(id) {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'FETCH_AFFILIATE_LOADING'
      });
      return window.fetch(`http://localhost:1337/api/affiliates/${id}`)
        .then((response) => {
          response.json().then(data => {
            dispatch({
              type: 'FETCH_AFFILIATE_SUCCESS',
              payload: data
            })
          })
        });
    });
  },

  selectAffiliate(id) {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'SELECT_AFFILIATE',
        payload: id
      })
    });
  },

  updateAffiliate(affiliate) {
    store.dispatch((dispatch) => {
      dispatch({
        type: 'UPDATE_AFFILIATE'
      });
      return window.fetch(`http://localhost:1337/api/affiliates/${affiliate.id}`, { method: 'POST', body: JSON.stringify(affiliate) })
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: 'UPDATE_AFFILIATE_SUCCESS',
            payload: data
          })
        })
    })
  }
}