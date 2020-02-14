<template>
  <ValidationObserver v-slot="{ invalid, reset, handleSubmit }">
    <form
      action="#"
      ref="rightform"
      @reset.prevent="reset"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <div class="row w-100 is-marginless">
        <div class="container mx-5 my-3">
          <div class="field">
            <label class="label is-marginless d-flex align-self-start"
              >Display Name:</label
            >
            <div class="control">
              <ValidationProvider
                name="This field"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <input
                  :class="classes"
                  class="input input-text"
                  type="text"
                  placeholder="e.g., Juan"
                  v-model="playerDisplayName"
                />
                <span :class="classes">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
        </div>
      </div>
      <div class="row w-100 is-marginless">
        <div class="container mx-5 mb-4">
          <div class="field">
            <label class="label is-marginless d-flex align-self-start"
              >My Birthday:</label
            >
            <div class="control">
              <ValidationProvider
                name="This field"
                rules="required"
                v-slot="{ errors, classes }"
              >
                <input
                  :class="classes"
                  id="datepickerDemoDialog"
                  class="input"
                  type="date"
                  data-display-mode="dialog"
                  v-model="playerBirthday"
                />
                <span :class="classes">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
        </div>
      </div>
      <div class="row w-100 is-marginless">
        <div class="container mx-5">
          <div class="field">
            <label class="label is-marginless d-flex align-self-start"
              >I live in:</label
            >

            <div class="control">
              <input
                v-for="region in regions"
                :key="region"
                type="button"
                class="m-1 alt-button"
                :value="region"
                @click="selectRegion(region)"
                :class="{ 'is-active': playerRegion === region }"
                :disabled="!(playerRegion === region) && playerRegion != ''"
              />
            </div>
            <ValidationProvider
              name="This field"
              rules="required"
              immediate
              v-slot="{ errors, classes }"
            >
              <input :class="classes" type="hidden" :value="playerRegion" />
              <span :class="classes">{{ regionError(errors[0]) }}</span>
            </ValidationProvider>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <!-- <router-link :to="{ name: 'login' }" tag="button" class="mx-3 my-3"
          >SUBMIT
        </router-link> -->
        <button type="submit" class="mx-3 my-3" :disabled="invalid">
          SUBMIT
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import bulmaCalendar from "../../node_modules/bulma-calendar/dist/js/bulma-calendar";
export default {
  data() {
    return {
      regions: [
        "Asia",
        "Australia",
        "Europe",
        "Africa",
        "North America",
        "South America"
      ]
    };
  },
  methods: {
    selectRegion(region) {
      if (this.playerRegion === "") {
        this.playerRegion = region;
      } else {
        this.playerRegion = "";
      }
    },
    regionError(error) {
      if (error) return "Please select a region.";
    },
    titleCase(str) {
      return str.toLowerCase().replace(/(^|\s)\S/g, function(t) {
        return t.toUpperCase();
      });
    },
    onSubmit() {
      var user = {};
      user["Email"] = this.$store.state.signUp.form.Email;
      user["Password"] = this.$store.state.signUp.form.Password;
      user["Role"] = this.$store.state.signUp.form.Role; //Player
      // eslint-disable-next-line no-extra-boolean-cast
      if (!Boolean(user["Role"])) {
        user["DisplayName"] = this.playerDisplayName;
        user["DateOfBirth"] = this.playerBirthday;
        user["Region"] = this.playerRegion;
      }
      this.$store.state.users.push(user);
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    developerCheckbox() {
      return this.isDeveloper ? "I am a Developer" : "I am a Player";
    },
    role() {
      return this.isDeveloper ? "developer" : "player";
    },
    // SIGN UP FORM HANDLERS
    playerDisplayName: {
      get() {
        return this.$store.state.signUp.player.DisplayName;
      },
      set(value) {
        this.$store.commit("updateSignUpPlayerFname", value);
      }
    },
    playerBirthday: {
      get() {
        return this.$store.state.signUp.player.DateOfBirth;
      },
      set(value) {
        this.$store.commit("updateSignUpPlayerDOB", value);
      }
    },
    playerRegion: {
      get() {
        return this.$store.state.signUp.player.Region;
      },
      set(value) {
        this.$store.commit("updateSignUpPlayerRegion", value);
      }
    }
  }
  // NOT WORKING, WONT SUBMIT FORM
  // mounted() {
  //   const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
  //     startDate: this.date
  //   })[0];
  //   calendar.on("date:selected", e => (this.date = e.start || null));
  // }
};
</script>

<style>
/* .datetimepicker-dummy
  .datetimepicker-dummy-wrapper
  .datetimepicker-dummy-input:first-child {
  width: 100% !important;
  max-width: 100%;
  z-index: 100;
}
.datetimepicker-dummy .datetimepicker-dummy-wrapper input {
  position: absolute;
  text-indent: 2.5rem;
  color: #757763;
  font-size: 1rem;
  text-align: left;
  width: 100%;
  height: 100%;
  max-width: 100%;
  z-index: 100;
} */
</style>

<style lang="scss" scoped>
.alt-button.has-error {
  box-shadow: 0 5px 15px #f45d94;
}
span {
  font-size: 12px;
}
span.has-error {
  color: #f45d94;
}
.alt-button {
  border-radius: 20px;
  border: none;
  background-color: rgba(81, 80, 156, 0.6);
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

button:hover {
  transform: scale(1.04);
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

input[type="text"],
input[type="date"] {
  background-color: rgba(239, 239, 239, 0.5) !important;
}

.input-text {
  padding: 12px 15px;
  margin: 8px 0;
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

input.has-error {
  border-color: #f45d94;
  box-shadow: 0 0 0 0.125em rgba(244, 93, 148, 0.25);
}
</style>
