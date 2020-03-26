export const state = () => ({
  data: []
});

export const mutations = {
  getHero (state, data) {
    state.data = data
  }
};
