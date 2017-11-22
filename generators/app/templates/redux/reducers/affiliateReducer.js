export const initialState = {
  items: [],
  loading: false,
  selectedAffiliate: null,
  lastAffiliateUpdated: null
};

export default function reducer(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case 'FETCH_AFFILIATES_LOADING':
      return Object.assign({}, state,
        {
          loading: true
        }
      );

    case 'FETCH_AFFILIATES_SUCCESS':
      return Object.assign({}, state,
        {
          loading: false,
          items: action.payload,
        }
      );

    case 'FETCH_AFFILIATE_LOADING':
      return Object.assign({}, state,
        {
          loading: true,
        }
      );

    case 'FETCH_AFFILIATE_SUCCESS':
      return Object.assign({}, state,
        {
          loading: false,
          items: state.items.map((item) => {
            if (item === action.payload.id) {
              return action.payload;
            }
            else { return item };
          })
        }
      );

    case 'SELECT_AFFILIATE':
      return Object.assign({}, state, { selectedAffiliate: action.payload });

    case 'UPDATE_AFFILIATE':
      return state;

    case 'UPDATE_AFFILIATE_SUCCESS':
      var currentItems = state.items.slice(0);
      var newAffiliate = action.payload;
      var newItems = currentItems.map(i => {
        if (Number(newAffiliate.id) === Number(i.id)) {
          return newAffiliate;
        }
        return i;
      });
      return Object.assign({}, state, { items: newItems, lastAffiliateUpdated: newAffiliate });

    default:
      return state
  }
}