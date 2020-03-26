export const state = () => ({
  data: [],
  hotData: [],
  selectArticle: {
    meta: {}
  }
});

export const mutations = {
  getArticle (state, data) {
    state.data = data || []
  },
  getHotArticle (state, data) {
    state.hotData = data || []
  },
  selectArticle (state, data) {
    state.selectArticle = data || {}
  }
}
