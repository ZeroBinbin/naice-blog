export const state = () => ({
  data: []
});

export const mutations = {
  getProject (state, data) {
    state.data = data || []
  }
};
