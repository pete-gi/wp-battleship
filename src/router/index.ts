import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import IndexView from "../views/IndexView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "index",
    component: IndexView
  },
  {
    path: "/play",
    name: "play",
    component: () =>
      import(/* webpackChunkName: "play" */ "../views/PlayView.vue")
  },
  {
    path: "/stats",
    name: "stats",
    component: () =>
      import(/* webpackChunkName: "stats" */ "../views/StatsView.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
