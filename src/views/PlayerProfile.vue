<template>
  <div class="rows">
    <section class="hero is-success is-bold">
      <div class="hero-body">
        <div class="container-fluid ml-5">
          <h1 class="header-title title is-3">
            My Profile
            <a href="#" class="has-text-white" @click="isEdit = !isEdit"
              ><font-awesome-icon icon="pen"></font-awesome-icon
            ></a>
          </h1>
        </div>
      </div>
    </section>
    <div class="container mt-5" v-show="isEdit === false">
      <div class="row w-100 is-marginless">
        <div class="container mx-5 my-3">
          <div class="field">
            <label class="label is-marginless d-flex align-self-start"
              >Display Name:</label
            >
            <div class="control">
              <input
                :class="classes"
                class="input input-text"
                type="text"
                placeholder="e.g., Juan"
                :value="playerDisplayName"
                readonly
              />
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
              <input
                :class="classes"
                id="datepickerDemoDialog"
                class="input"
                type="date"
                data-display-mode="dialog"
                :value="playerBirthday"
                readonly
              />
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
                :key="region"
                type="button"
                class="m-1 alt-button is-active"
                style="pointer-events: none;"
                :value="playerRegion"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="focus-bg is-absolute" v-show="isEdit === true"></div>
    <div class="container mt-5" v-show="isEdit === true">
      <div class="wrapper-container is-marginless" id="container">
        <div class="hero is-success is-small is-bold">
          <div class="hero-body">
            <div class="container-fluid ml-5">
              <h1 class="header-title title is-3">
                Edit Profile
              </h1>
            </div>
          </div>
        </div>
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
                      immediate
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
                      immediate
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
                      :disabled="
                        !(playerRegion === region) && playerRegion != ''
                      "
                    />
                  </div>
                  <ValidationProvider
                    name="This field"
                    rules="required"
                    immediate
                    v-slot="{ errors, classes }"
                  >
                    <input
                      :class="classes"
                      type="hidden"
                      :value="playerRegion"
                    />
                    <span :class="classes">{{ regionError(errors[0]) }}</span>
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <!-- <router-link :to="{ name: 'login' }" tag="button" class="mx-3 my-3"
          >SUBMIT
        </router-link> -->
              <button class="mx-3 my-3" id="button" @click="isEdit = false">
                CANCEL
              </button>
              <button
                type="submit"
                class="mx-3 my-3"
                id="button"
                :disabled="invalid"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import bulmaCalendar from "../../node_modules/bulma-calendar/dist/js/bulma-calendar";
export default {
  data() {
    return {
      isEdit: false,
      regions: [
        "Asia",
        "Australia",
        "Europe",
        "Africa",
        "North America",
        "South America"
      ],
      date: new Date()
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
    onSubmit() {
      console.log("yey");
      this.isEdit = false;
    }
  },
  // mounted() {
  //   const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
  //     startDate: this.date
  //   })[0];
  //   calendar.on("date:selected", e => (this.date = e.start || null));
  // },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    niceDate() {
      if (this.date) {
        return this.date.toLocaleDateString();
      }
    },
    playerDisplayName: {
      get() {
        return this.$store.state.auth_user.DisplayName;
      },
      set(value) {
        this.$store.commit("updateAuthPlayerDname", value);
      }
    },
    playerBirthday: {
      get() {
        return this.$store.state.auth_user.DateOfBirth;
      },
      set(value) {
        this.$store.commit("updateAuthPlayerDOB", value);
      }
    },
    playerRegion: {
      get() {
        return this.$store.state.auth_user.Region;
      },
      set(value) {
        this.$store.commit("updateAuthPlayerRegion", value);
      }
    }
  },
  created() {
    this.isEdit = false;
  }
};
</script>

<style lang="scss" scoped>
.is-hidden {
  display: none;
}

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

#button:disabled {
  border-radius: 20px;
  border: none;
  background-color: #d0d1cd;
  color: #fff;
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
.header-title {
  font-family: "Montserrat", sans-serif !important;
}

.rows > .hero {
  border-radius: 2rem 2rem 0 0 !important;
}
</style>

<style lang="scss" scoped>
.focus-bg {
  border-radius: 1.9rem 1.9rem 0 0;
  background-color: rgba(10, 10, 10, 0.85);
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
}

@media only screen and (min-width: 1024px) {
  .focus-bg {
    margin-left: 2rem;
    margin-top: 2rem;
  }
}

@media only screen and (max-width: 1024px) {
  .focus-bg {
    margin-top: 0;
    margin-left: 0;
  }
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

.wrapper-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  // width: 768px;
  // max-width: 100%;
  // min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
</style>
