<template>
  <section
    class="hero is-fullheight is-primary is-bold"
    :class="{ 'landing-page-bg': !showAbout }"
  >
    <!-- <div class="landing-page-bg"></div> -->

    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar is-paddingless">
        <div class="navbar-brand">
          <a
            class="navbar-item"
            @click="
              (showContact = false), (showAbout = false), (navActive = false)
            "
          >
            <h1 id="title-logo" class="title is-2">eduGames</h1>
            <img
              src="../assets/img/logo.png"
              style="width:24px;height:24px;"
              alt=""
            />
          </a>
          <span
            class="navbar-burger"
            data-target="navbarMenuHeroA"
            @click="showNav = !showNav"
            :class="{ 'is-active': showNav }"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroA"
          class="navbar-menu"
          style="padding-left:1.25rem;"
          :class="{ 'is-active': showNav }"
        >
          <div class="navbar-start">
            <a
              class="navbar-item"
              @click="
                (showContact = false),
                  (showAbout = !showAbout),
                  (navActive = showAbout)
              "
              :class="{ 'is-active': showAbout }"
            >
              <!-- <i class="fas fa-info-circle"></i>&nbsp; -->
              About
            </a>

            <a
              class="navbar-item"
              @click="
                (showAbout = false),
                  (showContact = !showContact),
                  (navActive = showContact)
              "
              :class="{ 'is-active': showContact }"
            >
              <!-- <i class="fas fa-address-book"></i>&nbsp; -->
              Contact
            </a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <!-- <a class="button is-info is-medium is-outlined is-rounded">
                  <strong>Sign up</strong>
                </a> -->
                <!-- <a class="button is-success is-inverted is-medium">
                  Log in
                </a> -->
                <router-link
                  :to="{ path: '/login/signup' }"
                  class="button is-info is-medium is-outlined is-rounded"
                  tag="a"
                >
                  Sign up
                </router-link>
                <router-link
                  :to="{ path: '/login/default' }"
                  class="button is-success is-inverted is-medium is-rounded"
                  tag="a"
                >
                  Log in
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <!-- <transition name="landing-nav" mode="out-in"> -->
    <keep-alive>
      <div v-show="!navActive" class="hero-body">
        <div class="container is-fluid">
          <transition name="landing-splash" mode="out-in">
            <keep-alive>
              <component :is="landingView"></component>
            </keep-alive>
          </transition>
        </div>
      </div>
      <component class="v-fade" v-show="navActive" :is="navItem"></component>
    </keep-alive>
    <!-- </transition> -->

    <!-- Hero footer: will stick at the bottom -->
    <!-- <transition name="landing-nav" mode="out-in"> -->
    <div v-if="!navActive" class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth" id="tabs">
        <div class="container is-fluid">
          <ul>
            <li
              @click="landingToggle = true"
              :class="{ 'is-active': landingToggle }"
            >
              <a>For Players</a>
            </li>
            <li
              @click="landingToggle = false"
              :class="{ 'is-active': !landingToggle }"
            >
              <a>For Game Developers</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- </transition> -->
  </section>
</template>

<script>
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import LandingPlayer from "./LandingPlayer";
import LandingDeveloper from "./LandingDeveloper";

export default {
  name: "LandingPage",
  data() {
    return {
      showNav: false,
      landingToggle: true,
      showContact: false,
      showAbout: false,
      navActive: false
    };
  },
  computed: {
    navItem() {
      // console.log("navactive " + this.navActive);
      // console.log("about " + this.showAbout);
      // console.log("contact " + this.showContact);
      if (this.showAbout) {
        // console.log("return about");
        return About;
      } else if (this.showContact) {
        // console.log("return contact");
        return Contact;
      } else {
        // console.log("return wala");
        return "";
      }
    },
    landingView() {
      return this.landingToggle ? LandingPlayer : LandingDeveloper;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.v-fade {
  animation-name: fade;
  animation-duration: 0.3s;
  animation-timing-function: ease;
}

html {
  overflow-y: auto;
}

a.navbar-item,
a.navbar-link {
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

.landing-page-bg {
  /* position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    box-sizing: inherit;
    height: 100%;
    width: 100%;
    min-width: inherit;
    min-height: inherit; */
  background-image: url("../assets/img/landing-bg.png") !important;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
}

a.navbar-item {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

a.navbar-item:hover {
  background-color: inherit !important;
}

a.navbar-item.is-active:hover {
  background-color: rgba(10, 10, 10, 0.1) !important;
}

a.navbar-item.is-active {
  background-color: rgba(10, 10, 10, 0.1) !important;
}

#title-logo {
  margin: 0;
}

.navbar-burger {
  color: #70aff9;
  border: 1px solid #70aff9;
}

.navbar-burger:hover {
  color: inherit;
  background-color: #70aff9;
}

.navbar {
  padding-left: 2rem;
  padding-right: 2rem;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.landing-splash-enter-active,
.landing-splash-leave-active,
.landing-nav-enter-active,
.landing-nav-leave-active {
  transition: all 0.3s ease;
}

.landing-splash-enter,
.landing-splash-leave-to,
.landing-nav-enter,
.landing-nav-leave-to {
  opacity: 0;
}

.landing-splash-enter,
.landing-splash-leave-to {
  transform: translateX(10px);
}
</style>
