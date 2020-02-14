<template>
  <div class="rows">
    <div class="d-flex flex-column">
      <section class="hero is-info is-bold mb-5" id="header">
        <div class="hero-body">
          <div class="container-fluid ml-5">
            <h1 class="header-title title is-3">
              Add New Game
            </h1>
          </div>
        </div>
      </section>
    </div>
    <div class="container mt-5">
      <ValidationObserver v-slot="{ invalid, reset, handleSubmit }">
        <form
          action="#"
          ref="rightform"
          id="rightform"
          @submit.prevent="handleSubmit(onSubmitRegister)"
          @reset.prevent="reset"
        >
          <div class="control">
            <!-- :class="[
                  { 'has-error': logInEmail === '' },
                  isEmailValid(signUpEmail)
                ]" -->
            <div class="row w-100 is-marginless">
              <div class="container mx-5">
                <div class="field">
                  <label class="label is-marginless d-flex align-self-start"
                    >Game Name:</label
                  >
                  <div class="control">
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <input
                        :class="classes"
                        class="input input-text"
                        type="text"
                        placeholder="my eduGame"
                        v-model="gameName"
                      />
                      <div class="mb-3">
                        <span :class="classes">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>
            <div class="row w-100 is-marginless">
              <div class="container mx-5">
                <div class="field">
                  <label class="label is-marginless d-flex align-self-start"
                    >Game Description:</label
                  >
                  <div class="control">
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <textarea
                        style="height: 6rem"
                        rows="3"
                        :class="classes"
                        class="input input-text"
                        type="text"
                        placeholder="My own fun and educational game!"
                        v-model="gameDesc"
                      />
                      <div class="mb-3">
                        <span :class="classes">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>
            <div class="row w-100 is-marginless">
              <div class="container mx-5">
                <div class="field">
                  <label class="label is-marginless d-flex align-self-start"
                    >Genre:</label
                  >
                  <div class="control">
                    <b-dropdown
                      split
                      split-variant="outline-primary bg-transparent text-primary no-event"
                      variant="primary"
                      :text="selectedGenre ? selectedGenre : 'Select genre'"
                      class="m-2"
                    >
                      <b-dropdown-item
                        v-for="genre in genres"
                        :key="genre"
                        @click="selectedGenre = genre.name"
                        ><font-awesome-icon
                          :icon="genre.icon"
                          class="mr-1"
                          fixed-width
                        ></font-awesome-icon
                        >{{ genre.name }}
                      </b-dropdown-item>
                    </b-dropdown>

                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors, classes }"
                    >
                      <input
                        :class="classes"
                        type="hidden"
                        :value="selectedGenre"
                      />
                      <div class="mb-3">
                        <span :class="classes">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>
            <div class="row w-100 is-marginless">
              <div class="container mx-5">
                <div class="field">
                  <label class="label is-marginless d-flex align-self-start"
                    >Link:</label
                  >
                  <div class="control">
                    <ValidationProvider
                      rules="required|url"
                      v-slot="{ errors, classes }"
                    >
                      <input
                        :class="classes"
                        class="input input-text"
                        type="text"
                        placeholder="http://www.play.myedugame.com/game"
                        v-model="gameLink"
                      />
                      <div class="mb-3">
                        <span :class="classes">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>
            <div class="row w-100 is-marginless">
              <div class="container mx-5">
                <div class="field">
                  <label class="label is-marginless d-flex align-self-start"
                    >Thumbnail URL Link:</label
                  >
                  <div class="control">
                    <ValidationProvider
                      rules="url"
                      v-slot="{ errors, classes }"
                    >
                      <input
                        id="imgurl"
                        :class="classes"
                        class="input input-text"
                        type="text"
                        placeholder="http://www.cdn.myedugame.com/img/myedugame.jpg"
                        v-model="gameThumbnailURL"
                      />
                      <div class="mb-3">
                        <span :class="classes">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                    <b-tooltip target="imgurl" placement="bottom">
                      Our servers currently dont support image file uploads.
                      However, you can customize your own game thumbnail via
                      CDN-delivered image URL. Otherwise, leave this blank and
                      we'll generate a thumbnail for you!
                    </b-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <router-link
                :to="{ name: 'register', params: { id: role } }"
                tag="button"
                class=""
                :disabled="invalid"
                >Sign Up
              </router-link> -->
          <button
            type="submit"
            class="my-3 d-flex ml-auto"
            id="button"
            :disabled="invalid"
          >
            SUBMIT
          </button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameName: "",
      gameDesc: "",
      gameLink: "",
      gameThumbnailURL: "",
      selectedGenre: "",
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
    onSubmit() {
      console.log("yey");
      this.isEdit = false;
    }
  },
  mounted() {}
};
</script>

<style>
.no-event {
  pointer-events: none;
}
</style>

<style scoped>
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

#button:not(:disabled):hover {
  transform: scale(1.04);
}

#button:active {
  transform: scale(0.95);
}

#button:focus {
  outline: none;
}

#button:disabled {
  border-radius: 20px;
  border: none;
  background-color: #d0d1cd;
  color: #fff;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease;
}
.fade-in-enter, .fade-in-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-1rem);
  opacity: 0;
}

.header-title {
  font-family: "Montserrat", sans-serif !important;
}

.dev-gradient {
  background-color: inherit;
  background-image: linear-gradient(to right, #70aff9, #20d2dc);
}

.rounded-big {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2rem 2rem;
}

#header {
  border-radius: 2rem 2rem 0 0;
}
</style>
