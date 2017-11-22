export const affiliateSelectors = {
  getAffiliate(state) {
    var id = state.selectedAffiliate;
    var affiliates = state.items;
    return state.items.find((a) => a.id === Number(state.selectedAffiliate));
  },

  getAffiliates(state) {
    return state.items;
  },

  lastAffiliateUpdated(state) {
    return state.lastAffiliateUpdated;
  }
}