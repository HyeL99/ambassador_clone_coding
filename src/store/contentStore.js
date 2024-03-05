const state = {
  sliderContent: [],
};

const mutations = {
  initDatas(state) {
    state.sliderContent = [];
  },
  setSliderContent(state, payload) {
    state.sliderContent = payload;
  },
};

const contentStore = {
  namespaced: true,
  state,
  mutations,
};

export default contentStore;
