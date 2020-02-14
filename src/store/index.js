import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  state: {
    authenticated: false,
    auth_user: {},
    signUp: {
      form: { Email: "", Password: "", Confirmpw: "", Role: 0 }, //0 or false - Player, 1 or true - Developer
      player: {
        DisplayName: "",
        DateOfBirth: "",
        Region: ""
      },
      developer: {
        CompanyName: "",
        CompanyURL: "",
        Region: ""
      }
    },
    logIn: {
      form: { Email: "", Password: "" }
    },
    users: [
      {
        Email: "a@a.co",
        Password: "asd",
        Role: 0,
        DisplayName: "user",
        DateOfBirth: "2020-02-09",
        Region: "Asia"
      },
      {
        Email: "b@b.co",
        Password: "asd",
        Role: 1,
        CompanyName: "Asd",
        CompanyURL: "http://asd.asd",
        Region: "Asia"
      },
      {
        Email: "c@c.co",
        Password: "asd",
        Role: 2,
        FirstName: "Admin",
        LastName: "Admin"
      }
    ]
  },
  mutations: {
    // setAuthentication(state, status) {
    //   state.authenticated = status;
    // }

    // SIGN UP FORM HANDLERS
    updateSignUpEmail(state, value) {
      state.signUp.form.Email = value;
    },
    updateSignUpPassword(state, value) {
      state.signUp.form.Password = value;
    },
    updateSignUpConfirmpw(state, value) {
      state.signUp.form.Confirmpw = value;
    },
    updateSignUpRole(state, value) {
      state.signUp.form.Role = value;
    },

    // // PLAYER SIGN UP FORM HANDLERS
    updateSignUpPlayerFname(state, value) {
      state.signUp.player.DisplayName = value;
    },
    updateSignUpPlayerDOB(state, value) {
      state.signUp.player.DateOfBirth = value;
    },
    updateSignUpPlayerRegion(state, value) {
      state.signUp.player.Region = value;
    },

    // // DEVELOPER SIGN UP FORM HANDLERS
    updateSignUpDeveloperCname(state, value) {
      state.signUp.developer.CompanyName = value;
    },
    updateSignUpDeveloperCurl(state, value) {
      state.signUp.developer.CompanyURL = value;
    },
    updateSignUpDeveloperRegion(state, value) {
      state.signUp.developer.Region = value;
    },

    // LOG IN FORM HANDLERS
    updateLogInEmail(state, value) {
      state.logIn.form.Email = value;
    },
    updateLogInPassword(state, value) {
      state.logIn.form.Password = value;
    },

    //AUTH USER PROFILE EDIT
    updateAuthPlayerDname(state, value) {
      state.auth_user.DisplayName = value;
    },
    updateAuthPlayerDOB(state, value) {
      state.auth_user.DateOfBirth = value;
    },
    updateAuthPlayerRegion(state, value) {
      state.auth_user.Region = value;
    }

    // LOG IN FIND USER
    // findUser(state, value) {
    //   if (state.users.find(savedUser => savedUser.Email === value)) return true;
    // }
  },
  actions: {},
  modules: {}
});
