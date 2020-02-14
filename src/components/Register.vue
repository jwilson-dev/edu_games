<template>
  <v-scroll class="scroll-area" :settings="settings">
    <div class="wrapper">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div class="wrapper-container" id="container">
        <div class="hero is-success is-small is-bold">
          <div class="hero-body">
            <div class="container-fluid ml-5">
              <router-link
                :to="{ path: '/login/signup' }"
                class="title is-4 is-absolute"
                style="left: 1rem; top: 0"
                tag="a"
                @click.native="clearStore()"
              >
                <font-awesome-icon
                  :icon="['fas', 'arrow-left']"
                ></font-awesome-icon>
              </router-link>
              <h1 class="header-title title is-3">
                You're almost there!
              </h1>
              <h2 class="subtitle d-flex align-self-start is-6">
                Complete the sign-up procedure
              </h2>
            </div>
          </div>
        </div>
        <component :is="registerView"></component>
      </div>
    </div>
    <!-- <button class="ghost" id="float">I Am A Developer</button> -->
  </v-scroll>
</template>

<script>
import playerRegister from "../views/PlayerRegister";
import developerRegister from "../views/DeveloperRegister";
export default {
  data() {
    return {
      settings: {
        suppressScrollY: true,
        suppressScrollX: true
      }
    };
  },
  methods: {
    clearStore() {
      for (var key in this.$store.state.signUp.player) {
        this.$store.state.signUp.player[key] = "";
      }
      for (var prop in this.$store.state.signUp.developer) {
        this.$store.state.signUp.developer[prop] = "";
      }
    }
  },
  beforeMount() {},
  computed: {
    registerView() {
      switch (this.$route.params.id) {
        case "player":
          return playerRegister;
        case "developer":
          return developerRegister;
        default:
          return playerRegister;
      }
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
  box-sizing: border-box;
}

#flow span {
  display: block;
  width: 200vw;
  height: 200vw;
  position: absolute;
  top: 30vw;
  left: -90vw;
  border-radius: 90vw;
  opacity: 0.6;
}
.flow-1 {
  background: #3281ff;
  -webkit-animation: rotating 20s linear infinite;
  -moz-animation: rotating 20s linear infinite;
  -ms-animation: rotating 20s linear infinite;
  -o-animation: rotating 20s linear infinite;
  animation: rotating 20s linear infinite;
}
.flow-2 {
  background: #f442ee;
  position: absolute;
  -webkit-animation: rotating 15s linear infinite;
  -moz-animation: rotating 15s linear infinite;
  -ms-animation: rotating 15s linear infinite;
  -o-animation: rotating 15s linear infinite;
  animation: rotating 15s linear infinite;
}
.flow-3 {
  background: #42eef4;
  position: absolute;
  -webkit-animation: rotating 7s linear infinite;
  -moz-animation: rotating 7s linear infinite;
  -ms-animation: rotating 7s linear infinite;
  -o-animation: rotating 7s linear infinite;
  animation: rotating 7s linear infinite;
}
@-webkit-keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}

.alt-button {
  border-radius: 20px;
  border: none;
  background-color: rgba(81, 80, 156, 0.8);
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.alt-button:disabled {
  border-radius: 20px;
  border: none;
  background-color: #d0d1cd;
  color: #fff;
}

.alt-button:not(:disabled):hover,
.alt-button.is-active {
  color: #fff;
  background-image: linear-gradient(to right, #9b42da, #70aff9);
  box-shadow: 0 5px 15px rgba(81, 80, 156, 0.5);
}

.alt-button:active {
  transform: scale(0.95);
}

.alt-button:focus {
  outline: none;
}

.alt-button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

.wrapper {
  background: #101b37;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif !important;
  height: 100vh;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

#button {
  border-radius: 20px;
  border: 1px solid #9b42da;
  background-color: #9b42da;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

#button:hover {
  transform: scale(1.04);
}

#button:active {
  transform: scale(0.95);
}

#button:focus {
  outline: none;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}
input {
  background-color: rgba(239, 239, 239, 0.5) !important;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

input:focus,
input:active {
  border-color: #9b42da !important;
  box-shadow: 0 0 0 0.125em rgba(81, 80, 156, 0.25) !important;
}

input.has-success {
  border-color: #48c774;
  box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}

input.has-error {
  border-color: #f45d94;
  box-shadow: 0 0 0 0.125em rgba(244, 93, 148, 0.25);
}

.wrapper-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.wrapper-container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.wrapper-container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  // animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.wrapper-container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #9b42da;
  background: -webkit-linear-gradient(to right, #51509c, #9b42da);
  background: linear-gradient(to right, #51509c, #9b42da);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.wrapper-container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.wrapper-container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.wrapper-container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
}

footer i {
  color: red;
}

footer a {
  color: #3c97bf;
  text-decoration: none;
}

#float {
  background: -webkit-linear-gradient(to right, #9b42da, #f45d94);
  background: linear-gradient(to right, #9b42da, #f45d94);
  border: none;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -200px;
  display: block;
  text-align: center;
  text-decoration: none;
  margin: 0 auto;
  animation: floating 1.5s ease forwards;
}

@keyframes floating {
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 20px;
  }
}
</style>
