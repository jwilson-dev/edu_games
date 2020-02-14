import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../components/Login.vue";
import AdminHome from "../components/HomeAdmin.vue";
import PlayerHome from "../components/HomePlayer.vue";
import DeveloperHome from "../components/HomeDeveloper.vue";
import Register from "../components/Register.vue";
// eslint-disable-next-line no-unused-vars
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login/:id",
    name: "login",
    component: Login
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../components/Login.vue")
  },
  {
    path: "/player/:id",
    name: "playerhome",
    component: PlayerHome,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/login/default");
      } else {
        next();
      }
    }
    // component: () => import("../components/HomePlayer.vue")
  },
  {
    path: "/developer/:id",
    name: "devhome",
    component: DeveloperHome,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/login/default");
      } else {
        next();
      }
    }
    // component: () => import("../components/HomePlayer.vue")
  },
  {
    path: "/admin/:id/:role?",
    name: "adminhome",
    component: AdminHome,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/login/default");
      } else {
        next();
      }
    }
    // component: () => import("../components/HomePlayer.vue")
  },
  {
    path: "/register/:id",
    name: "register",
    props: true,
    component: Register,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/login/signup");
      } else {
        next();
      }
    }
  }
  // {
  //   path: "/player/:id/:gameid",
  //   name: "playergame",
  //   props: true,
  //   component: () => import("../components/HomePlayer.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
