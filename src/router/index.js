import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/homePage/Home.vue";
import defaultLayout from "../layouts/default.vue";
import errorLayout from "../layouts/error.vue";
import { detail } from "../views/detailPage/routes";
import { favorite } from "../views/favoritePage/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: defaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      ...detail,
      ...favorite
    ],
  },
  {
    path: "/404",
    name: "404 Error",
    component: errorLayout,
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from) {
    if (to.name != from.name) return { x: 0, y: 0 };
  }, //sayfa değişikliğinde sayfanın en üstünde olması için
});

export default router;
