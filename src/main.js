import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/sass/main.scss";
import "@creativebulma/bulma-collapsible";
import "./assets/css/Site.css";
import vueCustomScrollbar from "vue-custom-scrollbar";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFontAwesome, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowDown,
  faArrowUp,
  faEnvelope,
  faLock,
  faArrowLeft,
  faGamepad,
  faUpload,
  faAngleDown,
  faStar,
  faPuzzlePiece,
  faLightbulb,
  faDice,
  faFutbol,
  faGhost,
  faHome,
  faUser,
  faSignOutAlt,
  faFireAlt,
  faBinoculars,
  faPen,
  faChartBar,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faArrowDown,
  faArrowUp,
  faEnvelope,
  faLock,
  faGoogle,
  faArrowLeft,
  faGamepad,
  faUpload,
  faAngleDown,
  faStar,
  faPuzzlePiece,
  faLightbulb,
  faGhost,
  faDice,
  faFutbol,
  faHome,
  faUser,
  faSignOutAlt,
  faFireAlt,
  faBinoculars,
  faPen,
  faChartBar,
  faCode
);
library.add(faFontAwesome);

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

import { VBScrollspyPlugin } from "bootstrap-vue";
Vue.use(VBScrollspyPlugin);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("v-scroll", vueCustomScrollbar);
Vue.config.productionTip = false;

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure
} from "vee-validate";
import { min, required, email, confirmed } from "vee-validate/dist/rules";
configure({
  classes: {
    valid: "has-success",
    invalid: "has-error"
    // dirty: ["is-dirty", "is-dirty"] // multiple classes per flag!
    // ...
  }
});
// Add a rule.
const urlFixRule = value => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(value);
};
extend("url", {
  validate: val => urlFixRule(val),
  message: "This URL is not valid."
});
extend("region", {
  validate: value => {
    return value !== "";
  },
  message: "Please select a region."
});
// No message specified.
extend("min", {
  ...min,
  message: "Minimum of 8 characters."
});
extend("email", email);
extend("required", {
  ...required,
  message: "This field is required."
});
extend("confirmed", {
  ...confirmed,
  message: "Passwords do not match."
});
// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Maps from "fusioncharts/fusioncharts.maps";
import World from "fusioncharts/maps/fusioncharts.world";
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme, Maps, World);

const ignoreWarnMessage =
  "The .native modifier for v-on is only valid on components but it was used on <svg>.";
// eslint-disable-next-line no-unused-vars
Vue.config.warnHandler = function(msg, vm, trace) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
    vm = null;
    trace = null;
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
