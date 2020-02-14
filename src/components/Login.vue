<template>
  <v-scroll class="scroll-area" :settings="settings">
    <div class="wrapper">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div
        class="wrapper-container"
        id="container"
        :class="{ 'right-panel-active': rightpanelactive }"
      >
        <!-- SIGN UP FORM -->
        <div class="form-container sign-up-container">
          <ValidationObserver v-slot="{ invalid, reset, handleSubmit }">
            <form
              action="#"
              ref="rightform"
              id="rightform"
              @submit.prevent="handleSubmit(onSubmitRegister)"
              @reset.prevent="reset"
            >
              <h1 class="title is-3 is-marginless">Create Account</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <font-awesome-icon
                    :icon="['fab', 'google']"
                  ></font-awesome-icon>
                </a>
              </div>
              <span>or use your email for registration</span>
              <div class="control">
                <!-- :class="[
                  { 'has-error': logInEmail === '' },
                  isEmailValid(signUpEmail)
                ]" -->
                <ValidationProvider
                  name="E-mail"
                  rules="required|email"
                  v-slot="{ errors, classes }"
                >
                  <input
                    :class="classes"
                    class="input"
                    type="text"
                    placeholder="Email"
                    ref="right"
                    v-model="signUpEmail"
                  />
                  <span :class="classes">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider
                  name="Password"
                  rules="required"
                  v-slot="{ errors, classes }"
                  vid="pw"
                >
                  <input
                    :class="classes"
                    class="input"
                    type="password"
                    placeholder="Password"
                    v-model="signUpPassword"
                  />
                  <span :class="classes">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider
                  name="This field"
                  rules="required|confirmed:pw"
                  v-slot="{ errors, classes }"
                >
                  <input
                    :class="classes"
                    class="input"
                    type="password"
                    placeholder="Confirm Password"
                    v-model="signUpConfirmpw"
                  />
                  <span :class="classes">{{ errors[0] }}</span>
                </ValidationProvider>
                <div class="field mt-2 mb-3">
                  <input
                    id="switchRoundedDefault"
                    type="checkbox"
                    name="switchRoundedDefault"
                    class="switch is-rounded is-outlined is-info"
                    v-model="isDeveloper"
                  />
                  <label
                    for="switchRoundedDefault"
                    onselectstart="return false"
                    >{{ developerCheckbox }}</label
                  >
                </div>
              </div>

              <!-- <router-link
                :to="{ name: 'register', params: { id: role } }"
                tag="button"
                class=""
                :disabled="invalid"
                >Sign Up
              </router-link> -->
              <button type="submit" class="mt-4" :disabled="invalid">
                Sign Up
              </button>
            </form>
          </ValidationObserver>
        </div>
        <div class="form-container sign-in-container">
          <div
            class
            style="margin-top: 1rem; margin-left: 1rem; position: absolute;"
          >
            <span>
              <router-link
                to="/"
                class="title is-3"
                tag="a"
                @click.native="clearStore()"
              >
                <font-awesome-icon
                  :icon="['fas', 'arrow-left']"
                ></font-awesome-icon>
              </router-link>
            </span>
          </div>

          <!-- LOG IN FORM -->
          <ValidationObserver v-slot="{ invalid, reset, handleSubmit }">
            <form
              action="#"
              ref="leftform"
              id="leftform"
              @submit.prevent="handleSubmit(onSubmitLogin)"
              @reset.prevent="reset"
            >
              <h1 class="title is-3 is-marginless">Log in</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <font-awesome-icon
                    :icon="['fab', 'google']"
                  ></font-awesome-icon>
                </a>
              </div>
              <span>or use your account</span>

              <div class="control">
                <!-- :class="[
                  { 'has-error': logInEmail === '' },
                  isEmailValid(logInEmail)
                ]" -->
                <ValidationProvider
                  name="E-mail"
                  rules="required|email"
                  v-slot="{ errors, classes }"
                >
                  <input
                    :class="classes"
                    class="input"
                    type="email"
                    placeholder="Email"
                    ref="left"
                    v-model="logInEmail"
                    v-focus
                  />
                  <span :class="classes">{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider
                  name="Password"
                  rules="required"
                  v-slot="{
                    errors,
                    classes
                  }"
                >
                  <input
                    :class="classes"
                    class="input"
                    type="password"
                    placeholder="Password"
                    v-model="logInPassword"
                  />
                  <span :class="classes">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <!-- <a href="#">Forgot your password?</a> -->
              <!-- <button type="submit" @click="login()">Login</button> -->
              <!-- <router-link
              :to="{ name: 'playerhome', params: { id: 'home' } }"
                type="submit"
                tag="button"
                class="mt-4"
                :disabled="invalid"
              >
                Log in
              </router-link> -->
              <button type="submit" class="mt-4" :disabled="invalid">
                Login
              </button>
            </form>
          </ValidationObserver>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="title is-3 is-marginless has-text-white">Welcome!</h1>
              <p>
                Already have an account? To keep connected with us, please log
                in
              </p>
              <button
                @click="(rightpanelactive = false), (isDeveloper = false)"
                class="ghost"
                id="signIn"
                form="rightform"
                type="reset"
              >
                Log In Now
              </button>
            </div>
            <div
              class
              style="margin-top: 1rem; margin-left: 1rem; position: absolute;"
            >
              <router-link
                to="/"
                class="title is-3 has-text-white"
                tag="a"
                @click.native="clearStore()"
              >
                <font-awesome-icon
                  :icon="['fas', 'arrow-left']"
                ></font-awesome-icon>
              </router-link>
            </div>
            <div class="overlay-panel overlay-right">
              <h1 class="title is-3 is-marginless has-text-white">
                Hello, Friend!
              </h1>
              <p>
                Don't have an account yet? Register now and start your journey
                with us
              </p>
              <button
                @click="rightpanelactive = true"
                class="ghost"
                id="signUp"
                form="leftform"
                type="reset"
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <button class="ghost" id="float">I Am A Developer</button> -->
    </div>
  </v-scroll>
</template>

<script>
export default {
  data() {
    return {
      rightpanelactive: false,
      settings: {
        suppressScrollY: true,
        suppressScrollX: true
      }
      // reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  methods: {
    alignment() {
      if (this.$route.params.id == "signup") {
        this.rightpanelactive = true;
      }
    },
    clearStore() {
      for (var key in this.$store.state.signUp.form) {
        if (key == "Role") this.$store.state.signUp.form[key] = 0;
        else this.$store.state.signUp.form[key] = "";
      }
      for (var prop in this.$store.state.logIn.form) {
        this.$store.state.logIn.form[prop] = "";
      }
    },
    onSubmitRegister() {
      if (
        this.$store.state.users.find(
          savedUser => savedUser.Email === this.signUpEmail
        )
      ) {
        alert("E-mail already exists!");
        for (var prop in this.$store.state.signUp.form) {
          this.$store.state.signUp.form[prop] = "";
        }
        return;
      }
      this.$router.push({ name: "register", params: { id: this.role } });
    },
    onSubmitLogin() {
      var user = this.$store.state.users.find(
        savedUser =>
          savedUser.Email === this.logInEmail &&
          savedUser.Password === this.logInPassword
      );
      if (user) {
        this.$store.state.authenticated = true;
        this.$store.state.auth_user = user;
        console.log(this.$store.state.auth_user);
        if (user.Role === 0) {
          this.$router.push({ name: "playerhome", params: { id: "home" } });
        } else if (user.Role === 1) {
          this.$router.push({ name: "devhome", params: { id: "home" } });
        } else if (user.Role === 2) {
          this.$router.push({ name: "adminhome", params: { id: "home" } });
        }
      } else {
        alert("Email/Password do not match!");
        return;
      }
    }
    // isEmailValid: function(text) {
    //   return text == ""
    //     ? ""
    //     : this.reg.test(text)
    //     ? "has-success"
    //     : "has-error";
    // }
  },
  beforeMount() {
    this.alignment();
  },
  computed: {
    developerCheckbox() {
      return this.isDeveloper ? "I am a Developer" : "I am a Player";
    },
    role() {
      return this.isDeveloper ? "developer" : "player";
    },
    // SIGN UP FORM HANDLERS
    signUpEmail: {
      get() {
        return this.$store.state.signUp.form.Email;
      },
      set(value) {
        this.$store.commit("updateSignUpEmail", value);
      }
    },
    signUpPassword: {
      get() {
        return this.$store.state.signUp.form.Password;
      },
      set(value) {
        this.$store.commit("updateSignUpPassword", value);
      }
    },
    signUpConfirmpw: {
      get() {
        return this.$store.state.signUp.form.Confirmpw;
      },
      set(value) {
        this.$store.commit("updateSignUpConfirmpw", value);
      }
    },
    isDeveloper: {
      get() {
        return Boolean(this.$store.state.signUp.form.Role);
      },
      set(value) {
        this.$store.commit("updateSignUpRole", Number(value));
      }
    },

    // LOG IN FORM HANDLERS
    logInEmail: {
      get() {
        return this.$store.state.logIn.form.Email;
      },
      set(value) {
        this.$store.commit("updateLogInEmail", value);
      }
    },
    logInPassword: {
      get() {
        return this.$store.state.logIn.form.Password;
      },
      set(value) {
        this.$store.commit("updateLogInPassword", value);
      }
    }
  },
  watch: {
    rightpanelactive: function() {
      if (this.rightpanelactive) {
        this.$refs.right.focus();
        this.logInEmail = "";
        this.logInPassword = "";
      } else {
        this.$refs.left.focus();
        this.signUpEmail = "";
        this.signUpPassword = "";
        this.signUpConfirmpw = "";
      }
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  }
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
  top: -180vw;
  left: -40vw;
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

button {
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

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button:disabled {
  border-radius: 20px;
  border: none;
  background-color: #d0d1cd;
  color: #fff;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}
input {
  background-color: rgba(239, 239, 239, 0.5);
  padding: 12px 15px;
  margin-top: 0.5rem;
  margin-bottom: 0;
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

span.has-error {
  color: #f45d94;
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
