export const state = () => ({
  scrollTop: 0,
  footerFixed: false,
  averterNum: 0
});
export const mutations = {
  changeScroll(state, num) {
    state.scrollTop = num
  },
  changeFooterFixed(state, isb) {
    state.footerFixed = isb
  },
  changeAverter(state, num) {
    state.averterNum = num
  }
}
