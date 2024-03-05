import Vue from "vue";
import VueRouter from "vue-router";
import settingRouter from "@/router/settingRouter";

Vue.use(VueRouter);

export default {
  $createRouter: async function () {
    // eslint-disable-next-line no-unused-vars
    const routes = new VueRouter({
      base: "/",
      mode: "history",
      // eslint-disable-next-line no-unused-vars
      scrollBehavior: (to, from, savePosition) => {
        if (to.hash) {
          return { selector: to.hash };
        } else {
          return { x: 0, y: 0 };
        }
      },
      routes: [
        {
          path: "/",
          component: () => import("@/views/Home.vue"),
          children: [...settingRouter],
        },
        {
          path: "/error",
          component: () => import("@/views/Error.vue"),
        },
        {
          path: "*",
          redirect: "/error",
        },
      ],
    });
    routes.onError((err) => {
      console.log("router error", err);
    });
    return routes;
  },
};
