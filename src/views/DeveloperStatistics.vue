<template>
  <div class="rows">
    <div class="d-flex flex-column mb-5">
      <section class="hero is-info is-bold">
        <div class="hero-body">
          <div class="container-fluid ml-5">
            <h1 class="header-title title is-3">
              My Statistics
            </h1>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [
        { name: "Puzzle", icon: "puzzle-piece" },
        { name: "Quiz", icon: "lightbulb" },
        { name: "Arcade", icon: "ghost" },
        { name: "Cards", icon: "dice" },
        { name: "Sport", icon: "futbol" }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.header-title {
  font-family: "Montserrat", sans-serif !important;
}

.rows > .d-flex:first-child .hero {
  border-radius: 2rem 2rem 0 0;
}
</style>
