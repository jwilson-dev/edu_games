<template>
  <div class="wrapper">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-2 is-marginless pt-0">
          <aside class="menu is-hidden-mobile sticky-top pt-3">
            <section class="section is-paddingless is-hidden-mobile mb-5">
              <a
                class="navbar-item pb-0"
                style="pointer-events: none; cursor: default;"
              >
                <h1 id="title-logo" class="h1 has-text-black is-marginless">
                  eduGames
                </h1>
                <img
                  src="../assets/img/logo.png"
                  style="width:24px;height:24px;"
                  alt=""
                />
              </a>
              <a
                class="navbar-item pt-0 mb-5"
                style="pointer-events: none; cursor: default;"
              >
                <h6 id="title-logo" class="h6 has-text-black is-marginless">
                  DEVELOPERS
                </h6>
              </a>
              <a
                class="navbar-item"
                style="pointer-events: none; cursor: default;"
              >
                <div
                  class="card has-background-info rounded-card is-absolute"
                  style="left: -2rem;"
                >
                  <div class="card-content">
                    <p class="h4 has-text-white font-weight-bold">
                      Welcome Back,
                      {{ this.$store.state.auth_user.CompanyName }}!
                    </p>
                  </div>
                </div>
              </a>
            </section>
            <p class="menu-label mt-5">
              General
            </p>
            <ul class="menu-list">
              <li>
                <router-link
                  :to="{ path: '/developer/home' }"
                  tag="a"
                  :class="{ 'is-active': routeID === 'home' }"
                  @click.native="scrollToTop"
                  ><font-awesome-icon
                    icon="home"
                    class="mr-1"
                    fixed-width
                  ></font-awesome-icon
                  >Home</router-link
                >
              </li>

              <li>
                <router-link :to="{ path: '/login/default' }" tag="a">
                  <font-awesome-icon
                    icon="sign-out-alt"
                    class="mr-1"
                    fixed-width
                    @click.native="logOut()"
                  ></font-awesome-icon
                  >Log Out
                </router-link>
              </li>
            </ul>
            <p class="menu-label">
              MANAGE GAMES
            </p>
            <ul class="menu-list">
              <li>
                <ul>
                  <li>
                    <router-link
                      :to="{ path: '/developer/profile' }"
                      tag="a"
                      :class="{ 'is-active': routeID === 'profile' }"
                      @click.native="scrollToTop"
                      ><font-awesome-icon
                        icon="gamepad"
                        class="mr-1"
                        fixed-width
                      ></font-awesome-icon
                      >My Games</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ path: '/developer/upload' }"
                      tag="a"
                      :class="{ 'is-active': routeID === 'upload' }"
                      @click.native="scrollToTop"
                      ><font-awesome-icon
                        icon="upload"
                        class="mr-1"
                        fixed-width
                      ></font-awesome-icon
                      >Upload Game</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </div>
        <div
          class="container is-fluid column is-10 is-paddingless-vertical is-marginless"
        >
          <div class="hero is-fullheight">
            <div class="container-panel">
              <keep-alive>
                <transition name="landing-splash" mode="out-in">
                  <keep-alive include="playerHome">
                    <component :is="playerView"></component>
                  </keep-alive>
                </transition>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import developerHome from "../views/DeveloperDashboard";
import developerGame from "../views/DeveloperGames";
import developerStatistics from "../views/DeveloperStatistics";
import developerUpload from "../views/DeveloperUpload";

export default {
  data() {
    return {
      playerDefault: true,
      genres: [
        { name: "Puzzle", icon: "puzzle-piece" },
        { name: "Quiz", icon: "lightbulb" },
        { name: "Arcade", icon: "ghost" },
        { name: "Cards", icon: "dice" },
        { name: "Sport", icon: "futbol" }
      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    logOut() {
      alert("deym");
      this.$store.state.authenticated = false;
      this.$store.state.auth_user = {};
    }
  },
  computed: {
    routeID() {
      return this.$route.params.id;
    },
    playerView() {
      console.log(this.$route.params);
      switch (this.routeID) {
        case "home":
          return developerHome;
        case "profile":
          return developerGame;
        case "upload":
          return developerUpload;
        case "statistics":
          return developerStatistics;
        default:
          return developerHome;
      }
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style lang="scss" scoped>
.rounded-card {
  border-radius: 0 1rem 1rem 0 !important;
  border-color: transparent;
}

.brand {
  font-family: "Quicksand", sans-serif;
}

.menu-list a {
  color: rgba(0, 0, 0, 0.7);
}

.menu-list a:not(.is-active):hover {
  background-color: inherit;
  background-image: linear-gradient(
    to right,
    rgba(112, 176, 249, 0.2),
    rgba(32, 211, 220, 0.2)
  );
}

.menu-list a.is-active {
  color: #fff !important;
  background-color: inherit;
  background-image: linear-gradient(to right, #70aff9, #20d2dc);
}

.card-content {
  padding: 0.5rem 1rem;
}

.wrapper {
  margin-top: 12px;
  background: #eff0eb;
}

.menu-label,
.menu > p,
.menu-list a:hover {
  color: #000;
}

.menu-list a {
  color: rgba(0, 0, 0, 0.7) !important;
}

.container-panel {
  background-color: #fff;
  min-height: calc(100vh - 2rem);
  margin-top: 2rem;
  margin-left: 2rem;
  border-radius: 2rem 2rem 0 0;
}

@media only screen and (min-width: 1024px) {
  .container-panel {
    margin-top: 2rem;
    margin-left: 2rem;
  }
}

.is-paddingless-vertical {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.row {
  margin: 4rem 0;
  padding: 0 2rem;
}

.column {
  margin-top: 1rem;
}

.splash-enter-active,
.splash-leave-active {
  transition: all 0.3s ease;
}

.splash-enter,
.splash-leave-to {
  opacity: 0;
}

.splash-enter,
.splash-leave-to {
  transform: translateX(10px);
}
</style>
