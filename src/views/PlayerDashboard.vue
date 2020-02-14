<template>
  <div class="rows">
    <div
      v-for="(row, rowindex) in rows"
      :key="row.title"
      class="d-flex flex-column mb-5"
    >
      <section class="hero is-success is-bold" :id="slugify(row.title)">
        <div class="hero-body">
          <div class="container-fluid">
            <h1 class="header-title h1 font-weight-bolder">
              {{ row.title }}
            </h1>
          </div>
        </div>
      </section>
      <div>
        <b-carousel
          :id="'carousel-' + rowindex"
          :interval="0"
          controls
          background="#fff"
          img-width="100%"
          img-height="100%"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- <b-carousel-slide
                        caption="Blank Image"
                        img-blank
                        img-alt="Blank image"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse eros felis, tincidunt a tincidunt
                          eget, convallis vel est. Ut pellentesque ut lacus vel
                          interdum.
                        </p>
                      </b-carousel-slide> -->

          <b-carousel-slide
            v-for="(chunk, chunkindex) in chunkedItems(row.games, limit)"
            :key="chunkindex"
          >
            <template v-slot:img>
              <div class="row mx-3">
                <div
                  v-for="(game, index) in chunk"
                  :key="game.title"
                  class="col-sm"
                >
                  <div class="card my-3">
                    <div class="card-image">
                      <figure class="image is-4by3">
                        <img
                          class="game-thumbnail"
                          :src="game.thumbnail"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div
                      ref="collapsibles"
                      :id="rowindex + '-collapsible-card-container'"
                    >
                      <header class="card-header">
                        <div
                          class="card-header-title d-flex flex-column is-paddingless align-items-start"
                        >
                          <div>{{ game.title }}</div>
                          <h1 class="pb-2 subtitle is-6 is-marginless">
                            by {{ game.dev }}
                          </h1>
                          <h6
                            class="h is-marginless font-weight-light font-italic"
                          >
                            <font-awesome-icon
                              icon="star"
                              class="has-text-warning"
                            ></font-awesome-icon>
                            {{ game.rating }} out of 5.0
                          </h6>
                        </div>
                        <a
                          :href="
                            '#' +
                              rowindex +
                              '-collapsible-card-container-' +
                              index
                          "
                          id="collapse-button"
                          data-action="collapse"
                          class="card-header-icon is-hidden-fullscreen"
                          aria-label="more options"
                          @click="game.cardActive = !game.cardActive"
                        >
                          <span class="icon h2 is-marginless">
                            <font-awesome-icon
                              icon="angle-down"
                            ></font-awesome-icon>
                          </span>
                        </a>
                      </header>
                      <div
                        :id="rowindex + '-collapsible-card-container-' + index"
                        class="is-collapsible"
                        :class="{
                          'is-active-card': !game.cardActive
                        }"
                      >
                        <div class="card-content pb-0 pt-1">
                          <p class="font-italic border-bottom has-text-dark">
                            Game Description
                          </p>
                          <p class="font-weight-light has-text-black pl-3">
                            {{ game.desc }}
                          </p>
                        </div>
                        <footer class="card-footer is-paddingless d-flex">
                          <h1
                            class="mr-auto align-self-center pl-3 font-italic"
                          >
                            <font-awesome-icon
                              :icon="game.genre.icon"
                              class="mr-1"
                            ></font-awesome-icon>
                            {{ game.genre.name }}
                          </h1>
                          <a
                            :href="game.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="button is-success is-rounded px-4 mr-3 mb-2"
                            >PLAY</a
                          >
                          <!-- <router-link
                            :to="{
                              name: 'playergame',
                              params: {
                                id: 'game',
                                gameid: game.gameid,
                                game: game
                              }
                            }"
                            class="button is-success is-rounded px-4 mr-3 mb-2"
                          >
                            PLAY
                          </router-link> -->
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-for="n in limit - chunk.length"
                  :key="n"
                  class="col-sm"
                ></div>
              </div>
            </template>
          </b-carousel-slide>
        </b-carousel>

        <!-- <p class="mt-4">
                      Slide #: {{ slide }}<br />
                      Sliding: {{ sliding }}
                    </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import bulmaCollapsible from "@creativebulma/bulma-collapsible";
export default {
  data() {
    return {
      rows: [
        {
          title: "Recently Played",
          games: [
            {
              cardActive: false,
              genre: "Mathematics",
              title: "recent1",
              dev: "Sample Dev1",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.1
            },
            {
              cardActive: false,
              genre: "Physics",
              title: "recent2",
              dev: "Sample Dev2",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.2
            },
            {
              cardActive: false,
              genre: "Logic",
              title: "recent3",
              dev: "Sample Dev3",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.3
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "recent4",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "recent5",
              dev: "Sample Dev1",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.1
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "recent6",
              dev: "Sample Dev2",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.2
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "recent7",
              dev: "Sample Dev3",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.3
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "recent8",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "recent9",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            }
          ]
        },
        {
          title: "Discover",
          games: [
            {
              cardActive: false,
              genre: "Mathematics",
              title: "discover1",
              dev: "Sample Dev1",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.1
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "discover2",
              dev: "Sample Dev2",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.2
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "discover3",
              dev: "Sample Dev3",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.3
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "discover4",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "discover4",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            }
          ]
        },
        {
          title: "Top Rated Games",
          games: [
            {
              cardActive: false,
              genre: "Mathematics",
              title: "toprated1",
              dev: "Sample Dev1",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.1
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "toprated2",
              dev: "Sample Dev2",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.2
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "toprated3",
              dev: "Sample Dev3",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.3
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "toprated4",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "toprated2",
              dev: "Sample Dev2",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.2
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "toprated3",
              dev: "Sample Dev3",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.3
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "toprated4",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            }
          ]
        },
        {
          title: "Most Popular Games",
          games: [
            {
              gameid: 2018,
              cardActive: false,
              genre: { name: "Puzzle", icon: "puzzle-piece" },
              title: "Find in Mind",
              dev: "Famobi",
              desc:
                "Too lazy to go to the gym for a workout? Then this is the " +
                "perfect game for you! Stay on the couch and do some mental " +
                "exercise instead. But don't be fooled, the puzzles in 'Find " +
                "In Mind' will bend your brain to the limit. Are you up for the " +
                "challenge?",
              link: "https://play.famobi.com/find-in-mind/A-WI09X",
              img:
                "https://ik.imagekit.io/sjyfpsp1n/marketing/featuredGames/find-in-mind/",
              thumbnail:
                "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FindInMind_Teaser.jpg",
              rating: 4.1
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "popular2",
              dev: "Sample Dev2",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.2
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "popular3",
              dev: "Sample Dev3",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.3
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "popular4",
              dev: "Sample Dev4",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.4
            },
            {
              cardActive: false,
              genre: "Mathematics",
              title: "popular3",
              dev: "Sample Dev3",
              desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                "Sint modi ipsa vel quibusdam pariatur quod quisquam quia " +
                "veniam cumque optio?",
              rating: 4.3
            }
          ]
        }
      ],
      genres: [
        { name: "Puzzle", icon: "puzzle-piece" },
        { name: "Quiz", icon: "lightbulb" },
        { name: "Arcade", icon: "ghost" },
        { name: "Cards", icon: "dice" },
        { name: "Sport", icon: "futbol" }
      ],
      // slide: 0,
      // sliding: null,
      limit: 4
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    chunkedItems(arr, size) {
      return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );
    },
    slugify(string) {
      return string.replace(/\s+/g, "-").toLowerCase();
    }
    // collapseAll() {
    //   var clsElements = document.querySelectorAll("#collapse-button");
    //   clsElements.forEach(element => {
    //     element.classList.remove("is-active");
    //   });
    // }
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const collapsibles = bulmaCollapsible.attach();
    // console.log(collapsibles);

    // var prev = document.getElementsByClassName("carousel-control-prev-icon");
    // prev.forEach(element => {
    //   element.addEventListener("click", () => {
    //     this.collapseAll();
    //   });
    // });
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        this.limit = 1;
        return;
      }
      if (window.innerWidth <= 1152) {
        this.limit = 2;
        return;
      }
      if (window.innerWidth > 1152) {
        this.limit = 4;
        return;
      }
    });
  }
};
</script>

<style>
.game-thumbnail:hover {
  background-image: none;
  cursor: pointer;
}

.is-active-card {
  display: none;
}

.card-footer {
  border-top: none;
}

.carousel.slide {
  text-shadow: none !important;
  min-width: inherit;
}

.carousel-control-prev,
.carousel-control-next {
  width: 0% !important;
}

.carousel-control-prev-icon {
  position: absolute;
  left: 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e") !important;
}
.carousel-control-next-icon {
  position: absolute;
  right: 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e") !important;
}
</style>

<style scoped>
.header-title {
  font-family: "Montserrat", sans-serif !important;
}

@media only screen and (min-width: 1024px) {
  .header-title {
    padding-left: 3rem;
  }
}

.rows > .d-flex:first-child .hero {
  border-radius: 2rem 2rem 0 0;
}
</style>
