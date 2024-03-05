import Vue from "vue";
import App from "./App.vue";
import customRouter from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_KEY,
  },
});

// eslint-disable-next-line no-unused-vars
$createVue().then((r) => {});

async function $createVue() {
  const router = await customRouter.$createRouter();
  const app = new Vue({
    router,
    store,
    async beforeCreate() {
      this.$mount("#app");
    },
    render: (h) => h(App),
    i18n,
  });
  window.store = app.$store;
  window.router = app.$router;
}

Vue.prototype.$store = store;
