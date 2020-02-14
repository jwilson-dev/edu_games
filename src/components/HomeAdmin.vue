<template>
  <div class="wrapper pb-4">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-2 is-marginless pt-0">
          <aside class="menu is-hidden-mobile sticky-top pt-3">
            <section class="section is-paddingless is-hidden-mobile mb-5">
              <a
                class="navbar-item pb-0"
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
                class="navbar-item pt-0 mb-5"
                style="pointer-events: none; cursor: default;"
              >
                <h6 id="title-logo" class="h6 has-text-white is-marginless">
                  ADMIN
                </h6>
              </a>
              <a
                class="navbar-item"
                style="pointer-events: none; cursor: default;"
              >
                <div
                  class="card has-background-primary rounded-card is-absolute"
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
                  :to="{ path: '/admin/home' }"
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
              MANAGE USERS
            </p>
            <ul class="menu-list">
              <li>
                <ul>
                  <li>
                    <router-link
                      :to="{ path: '/admin/manage/players' }"
                      tag="a"
                      :class="{ 'is-active': routeID === 'profile' }"
                      @click.native="scrollToTop"
                      ><font-awesome-icon
                        icon="user"
                        class="mr-1"
                        fixed-width
                      ></font-awesome-icon
                      >Players</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ path: '/admin/manage/developers' }"
                      tag="a"
                      :class="{ 'is-active': routeID === 'upload' }"
                      @click.native="scrollToTop"
                      ><font-awesome-icon
                        icon="code"
                        class="mr-1"
                        fixed-width
                      ></font-awesome-icon
                      >Developers</router-link
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
import adminHome from "../views/AdminDashboard";
import adminManageUser from "../views/AdminManageUser";
import adminManageDeveloper from "../views/AdminManageDeveloper.vue";

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
      console.log(this.routeID);
      switch (this.routeID) {
        case "home":
          return adminHome;
        case "manage":
          switch (this.$route.params.role) {
            case "players":
              return adminManageUser;
            case "developers":
              return adminManageDeveloper;
            default:
              return adminManageUser;
          }
        default:
          return adminHome;
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
.admin-gradient {
  background-color: inherit;
  background-image: linear-gradient(to right, #51509c, #101b37);
}

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
    rgba(81, 80, 156, 0.4),
    rgba(16, 27, 55, 0.4)
  );
}

.menu-list a.is-active {
  color: #fff !important;
  background-color: inherit;
  background-image: linear-gradient(to right, #51509c, #101b37);
}

.card-content {
  padding: 0.5rem 1rem;
}

.wrapper {
  margin-top: 12px;
  background: #000;
}

.menu-label,
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
