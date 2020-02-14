<template>
  <div class="wrapper">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-2 is-marginless pt-0">
          <aside class="menu is-hidden-mobile sticky-top pt-3">
            <section class="section is-paddingless is-hidden-touch mb-3">
              <a
                class="navbar-item mb-5"
                style="pointer-events: none; cursor: default;"
              >
                <h1 id="title-logo" class="h1 has-text-white is-marginless">
                  eduGames
                </h1>
                <img
                  src="../assets/img/logo.png"
                  style="width:24px;height:24px;"
                  alt=""
                />
              </a>
              <a
                class="navbar-item until-widescreen"
                style="pointer-events: none; cursor: default;"
              >
                <div
                  class="card has-background-success rounded-card is-absolute"
                  style="left: -2rem;"
                >
                  <div class="card-content">
                    <p class="h4 has-text-white font-weight-bold">
                      Welcome Back,
                      {{ this.$store.state.auth_user.DisplayName }}!
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
                  :to="{ path: '/player/home' }"
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
                <router-link
                  :to="{ path: '/player/profile' }"
                  tag="a"
                  :class="{ 'is-active': routeID === 'profile' }"
                  @click.native="scrollToTop"
                  ><font-awesome-icon
                    icon="user"
                    class="mr-1"
                    fixed-width
                  ></font-awesome-icon
                  >Profile</router-link
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
              Game Categories
            </p>
            <ul class="menu-list">
              <li>
                <ul>
                  <li v-for="genre in genres" :key="genre.name">
                    <router-link
                      :to="{ path: '/player/' + genre.name }"
                      tag="a"
                    >
                      <font-awesome-icon
                        :icon="genre.icon"
                        class="mr-1"
                        fixed-width
                      ></font-awesome-icon>
                      {{ genre.name }}</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <div v-if="routeID === 'home'">
              <p class="menu-label">
                Dashboard
              </p>
              <ul class="menu-list">
                <li>
                  <a href="#recently-played"
                    ><font-awesome-icon
                      icon="gamepad"
                      class="mr-2"
                      fixed-width
                    ></font-awesome-icon
                    >Recently Played
                  </a>
                  <a href="#discover"
                    ><font-awesome-icon
                      icon="binoculars"
                      class="mr-2"
                      fixed-width
                    ></font-awesome-icon
                    >Discover
                  </a>
                  <a href="#top-rated-games"
                    ><font-awesome-icon
                      icon="star"
                      class="mr-2"
                      fixed-width
                    ></font-awesome-icon
                    >Top Rated Games
                  </a>
                  <a href="#most-popular-games"
                    ><font-awesome-icon
                      icon="fire-alt"
                      class="mr-2"
                      fixed-width
                    ></font-awesome-icon
                    >Most Popular Games
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div
          class="container is-fluid column is-10 is-paddingless is-marginless"
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
import playerHome from "../views/PlayerDashboard";
import playerProfile from "../views/PlayerProfile";
import PlayerGameCategory from "../views/PlayerGameCategory.vue";

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
          return playerHome;
        case "profile":
          return playerProfile;
        default:
          return PlayerGameCategory;
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
  color: rgba(255, 255, 255, 0.7);
}

.menu-label,
.menu-list a:hover,
.menu-list a.is-active {
  color: #fff !important;
}

.menu-list a:not(.is-active):hover {
  background-color: inherit;
  background-image: linear-gradient(
    to right,
    rgba(155, 66, 218, 0.2),
    rgba(81, 80, 156, 0.2)
  );
}

.menu-list a.is-active {
  background-color: inherit;
  background-image: linear-gradient(to right, #9b42da, #51509c);
}

.card-content {
  padding: 0.5rem 1rem;
}

.wrapper {
  margin-top: 12px;
  background: #101b37;
}

.menu > p,
.menu-list a:hover {
  color: #fff;
}

.menu-list a {
  color: rgba(255, 255, 255, 0.7) !important;
}

.container-panel {
  background-color: #fff;
  min-height: calc(100vh - 2rem);
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
