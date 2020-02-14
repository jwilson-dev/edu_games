<template>
  <div>
    <!-- First Part -->
    <section class="hero is-fullheight-with-navbar is-primary is-bold about">
      <div class="hero-body">
        <div class="container">
          <h1 class="title biggest has-text-centered">
            Get to Know Us.
          </h1>
          <h1
            class="title bigger has-text-centered animated-arrow-down"
            style="margin-top: 2rem;"
          >
            <font-awesome-icon icon="arrow-down"></font-awesome-icon>
          </h1>
        </div>
      </div>
    </section>

    <!-- Second Part -->
    <section class="hero is-fullheight is-success is-bold">
      <div class="hero-head has-text-centered">
        <h1 class="subtitle has-text-spaced is-6" style="padding-top: 4rem;">
          HELLO WORLD!
        </h1>
        <h1 class="title is-1">
          Who We Are
        </h1>
      </div>
      <div class="hero-body">
        <div class="container has-text-justified">
          <h1 class="title has-text-centered">
            eduGames<img
              src="../assets/img/logo.png"
              style="width:24px;height:24px;"
              alt=""
            />
            <span class="subtitle"
              >is a project built by two Computer Science students.</span
            >
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod auctor felis congue efficitur. Fusce hendrerit purus metus,
            id iaculis turpis faucibus non. Praesent ut mi accumsan, molestie
            lectus eget, consequat justo. Aenean odio sapien, eleifend eget
            sapien ac, facilisis sodales risus. Praesent porttitor venenatis
            porta. Cras porttitor sagittis rutrum. Etiam tincidunt ante lacus,
            pellentesque aliquam justo porttitor quis.
          </p>
          <p>
            Praesent rhoncus lacinia hendrerit. Cras molestie lorem ut purus
            tincidunt consectetur. Vivamus rutrum venenatis scelerisque. Proin
            sit amet ex ultrices, facilisis est sit amet, consequat orci. Etiam
            libero lacus, rutrum sit amet pretium ac, mollis vitae nunc. Nunc
            cursus, magna sed lacinia aliquet, nibh lorem rutrum lectus, ac
            eleifend urna nisl condimentum odio. Aliquam a odio ipsum. Integer
            tincidunt facilisis leo, vel accumsan tortor sodales nec. Etiam
            vehicula pretium nisi id sagittis. Morbi sodales condimentum
            pellentesque.
          </p>
          <p>
            Nulla facilisi. Mauris magna lectus, feugiat in interdum sed,
            tincidunt sit amet lacus. Phasellus ut metus mattis, tincidunt neque
            in, lacinia orci. Praesent quis lectus feugiat, semper turpis ac,
            placerat libero. Donec maximus sem sed nibh ullamcorper blandit id
            vel massa. Vivamus ut nulla lectus. Nunc nisl nisi, sagittis quis
            enim a, porta tristique risus. Nam venenatis risus non placerat
            interdum.
          </p>
        </div>
      </div>
    </section>

    <!-- Third Part -->
    <section class="hero is-fullheight is-danger is-bold">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="columns is-mobile has-text-centered">
            <div class="column">
              <h1 class="title is-1">
                Our mission
              </h1>
              <p class="subtitle is-5 has-text-spaced-2">
                Vestibulum venenatis felis lorem, at maximus urna venenatis et.
              </p>
            </div>
            <div class="column">
              <h1 class="title is-1">
                Our vision
              </h1>
              <p class="subtitle is-5 has-text-spaced-2">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
          <div
            class="columns is-mobile has-text-centered"
            style="margin-top: 2rem;"
          >
            <div class="column">
              <h1 class="title is-1">
                Our hopes
              </h1>
              <p class="subtitle is-5 has-text-spaced-2">
                Vestibulum volutpat, est a pharetra egestas, metus nibh accumsan
                elit, ac aliquam diam justo pharetra sapien.
              </p>
            </div>
            <div class="column">
              <h1 class="title is-1">
                Our dreams
              </h1>
              <p class="subtitle is-5 has-text-spaced-2">
                For Wuhan coronavirus (2019-nCoV strain) to spread all around
                the world and eradicate humanity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fourth Part -->
    <section class="hero is-fullheight is-info is-bold">
      <div class="hero-head has-text-centered">
        <h1 class="title is-1" style="padding-top: 4rem;">
          Courses Involved in this Project
        </h1>
      </div>
      <div class="hero-body ">
        <div class="container has-text-centered ">
          <div class="columns is-mobile has-text-centered ">
            <div class="column ">
              <h1 class="box title biggest has-text-centered has-text-dark">
                IT114
              </h1>
            </div>
            <div class="column">
              <h1 class="box title biggest has-text-centered has-text-dark">
                CS107
              </h1>
            </div>
          </div>
          <div class="columns is-mobile has-text-centered">
            <div class="column">
              <h1 class="box title biggest has-text-centered has-text-dark">
                IT114L
              </h1>
            </div>
            <div class="column">
              <h1 class="box title biggest has-text-centered has-text-dark">
                CS107L
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-footer" style="padding-bottom: 4rem;">
        <div class="container">
          <h1 class="subtitle is-5 alternate-font has-text-centered">
            proctored by professors:
          </h1>
          <div class="columns is-mobile has-text-centered">
            <div class="column">
              <h1 class="title">Dennis Martillano</h1>
            </div>
            <div class="column">
              <h1 class="title">Adomar Ilao</h1>
            </div>
            <div class="column">
              <h1 class="title">Terrence Lim</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Part -->
    <section class="hero is-small is-dark">
      <div class="back-to-top-link">
        <a
          class="arrow-up has-text-centered has-text-white"
          @click="scrollToTop"
        >
          <font-awesome-icon icon="arrow-up"></font-awesome-icon><br />
          <span style="font-size: 0.7rem;">TOP</span>
        </a>
      </div>
      <div class="hero-body">
        <div class="container"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.biggest {
  font-size: 7rem !important;
}

.bigger {
  font-size: 5rem !important;
}

.has-text-spaced {
  letter-spacing: 0.8em !important;
}

.has-text-spaced-2 {
  letter-spacing: 2px !important;
}

.alternate-font {
  font-family: "Quicksand", sans-serif !important;
}

p {
  font-family: "Quicksand", sans-serif !important;
  margin-bottom: 1.5rem !important;
  letter-spacing: 0.02em !important;
  line-height: 40px !important;
}

.animated-arrow-down {
  animation: mymove 1s alternate infinite ease-in-out !important;
}

@keyframes mymove {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(3rem);
  }
}

.back-to-top-link {
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 100;
  display: block;
  background-color: inherit;
  width: 50px;
  height: 50px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  left: 50%;
  top: -25px;
  margin: auto;
  margin-top: -25px;
  padding-top: 2px;
}

.back-to-top-link a {
  display: block;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1;
  color: #fff;
  padding-top: 4px;
}
</style>
