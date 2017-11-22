import { store } from "./redux/store/createStore.js";
import { affiliateActions } from "./redux/actions/affiliateActions.js";
import { routerActions } from "./redux/actions/routerActions.js";
import { affiliateSelectors } from "./redux/selectors/affiliateSelectors.js";
import { routerSelectors } from "./redux/selectors/routerSelectors.js";
import { toolbarSelectors } from "./redux/selectors/toolbarSelectors.js";

window.AffiliateApp = {
  store: store,
  affiliateActions: affiliateActions,
  routerActions: routerActions,
  affiliateSelectors: affiliateSelectors,
  toolbarSelectors: toolbarSelectors,
  routerSelectors: routerSelectors
};