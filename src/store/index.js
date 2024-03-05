import Vue from "vue";
import Vuex from "vuex";
import menuStore from "@/store/menuStore";
import contentStore from "@/store/contentStore";

Vue.use(Vuex);

const state = {
  locale: "ko_KR",
};
const mutations = {
  setLocale(state, payload) {
    state.locale = payload;
  },
};
const actions = {};
const modules = {
  menuStore: menuStore,
  contentStore: contentStore,
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  plugins: [],
});
