export const routerSelectors = {
  getCurrentRoute(state) {
    var history = state.history.slice(0);
    if (history.length > 0) {
      return history.pop();
    }
    return null;
  }
}