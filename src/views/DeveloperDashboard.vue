<template>
  <div class="rows">
    <div class="d-flex flex-column">
      <section class="hero is-info is-bold mb-5" id="header">
        <div class="hero-body">
          <div class="container-fluid ml-5">
            <h1 class="header-title title is-3">
              My Dashboard
            </h1>
          </div>
        </div>
      </section>
      <div class="container is-fluid mb-5">
        <h1 class="header-title title is-4">This Week:</h1>
        <div class="columns">
          <transition name="fade-in" appear>
            <div class="column">
              <section
                class="hero is-info dev-gradient px-5 d-flex align-items-center rounded-big"
              >
                <div class="hero-header pt-5">
                  <h1 class="header-title subtitle is-4">
                    Players Reached
                  </h1>
                </div>
                <div class="hero-body pt-3">
                  <h1 class="header-title title is-2">
                    1,234
                  </h1>
                </div>
              </section>
            </div>
          </transition>
          <transition name="fade-in" appear>
            <div class="column">
              <section
                class="hero is-info dev-gradient px-5 d-flex align-items-center rounded-big"
              >
                <div class="hero-header pt-5">
                  <h1 class="header-title subtitle is-4">
                    Average Rating
                  </h1>
                </div>
                <div class="hero-body pt-3">
                  <h1 class="header-title title is-2 is-marginless pr-2">
                    4.9
                  </h1>
                  <h1
                    class="header-title title is-6 is-marginless font-weight-light"
                  >
                    / 5.0
                  </h1>
                </div>
              </section>
            </div>
          </transition>
          <transition name="fade-in" appear>
            <div class="column">
              <section
                class="hero is-info dev-gradient px-5 d-flex align-items-center rounded-big"
              >
                <div class="hero-header pt-5">
                  <h1 class="header-title subtitle is-4">
                    My Most Popular Genre
                  </h1>
                </div>
                <div class="hero-body pt-3">
                  <h1 class="header-title title is-2">
                    Puzzle
                  </h1>
                </div>
              </section>
            </div>
          </transition>
        </div>
      </div>
      <div class="container is-fluid mt-4">
        <div class="columns">
          <div class="column">
            <h1 class="header-title title is-5">Player Trends:</h1>
            <fusioncharts
              :type="playerTrendParams.type"
              :width="playerTrendParams.width"
              :height="playerTrendParams.height"
              :dataFormat="playerTrendParams.dataFormat"
              :dataSource="playerTrend"
            ></fusioncharts>
          </div>
          <div class="column">
            <h1 class="header-title title is-5">Genre Popularity:</h1>
            <fusioncharts
              :type="genreTrendParams.type"
              :width="genreTrendParams.width"
              :height="genreTrendParams.height"
              :dataFormat="genreTrendParams.dataFormat"
              :dataSource="genreTrend"
            ></fusioncharts>
          </div>
        </div>
      </div>
      <div class="container is-fluid mt-5">
        <div class="columns">
          <div class="column">
            <h1 class="header-title title is-5">Player Reach by Age Group:</h1>
            <fusioncharts
              :type="ageTrendParams.type"
              :width="ageTrendParams.width"
              :height="ageTrendParams.height"
              :dataFormat="ageTrendParams.dataFormat"
              :dataSource="ageTrend"
            ></fusioncharts>
          </div>
          <div class="column">
            <h1 class="header-title title is-5">Player Reach by Region:</h1>
            <fusioncharts
              :type="regionTrendParams.type"
              :width="regionTrendParams.width"
              :height="regionTrendParams.height"
              :dataFormat="regionTrendParams.dataFormat"
              :dataSource="regionTrend"
            ></fusioncharts>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerTrend: {
        chart: {
          xAxisName: "Day",
          yAxisName: "No. of Visitors (In 1000s)",
          showValues: "0",
          theme: "fusion"
        },
        annotations: {
          groups: [
            {
              id: "anchor-highlight",
              items: [
                {
                  id: "high-star",
                  type: "circle",
                  x: "$dataset.0.set.2.x",
                  y: "$dataset.0.set.2.y",
                  radius: "12",
                  color: "#6baa01",
                  border: "2",
                  borderColor: "#f8bd19"
                },
                {
                  id: "label",
                  type: "text",
                  text: "Peaked at 25.5K",
                  fillcolor: "#6baa01",
                  rotate: "90",
                  x: "$dataset.0.set.2.x+75",
                  y: "$dataset.0.set.2.y-2"
                }
              ]
            }
          ]
        },
        data: [
          {
            label: "Mon",
            value: "15123"
          },
          {
            label: "Tue",
            value: "14233"
          },
          {
            label: "Wed",
            value: "25507"
          },
          {
            label: "Thu",
            value: "9110"
          },
          {
            label: "Fri",
            value: "15529"
          },
          {
            label: "Sat",
            value: "20803"
          },
          {
            label: "Sun",
            value: "19202"
          }
        ]
      },
      genreTrend: {
        chart: {
          xAxisName: "Genre",
          yAxisName: "No of Visitors (in 1000s)",
          numberSuffix: "K",
          theme: "fusion"
        },
        data: [
          {
            label: "Puzzle",
            value: "29"
          },
          {
            label: "Quiz",
            value: "26"
          },
          {
            label: "Arcade",
            value: "18"
          },
          {
            label: "Cards",
            value: "14"
          },
          {
            label: "Sport",
            value: "11"
          }
        ]
      },
      regionTrend: {
        chart: {
          numbersuffix: "%",
          includevalueinlabels: "1",
          labelsepchar: ": ",
          labelFontColor: "#fff",
          entityFillHoverColor: "#20d2dc",
          theme: "fusion"
        },
        colorrange: {
          minvalue: "0",
          code: "#70aff9",
          gradient: "1",
          color: [
            {
              minvalue: "0.0",
              maxvalue: "0.5",
              color: "#a3caf8"
            },
            {
              minvalue: "0.5",
              maxvalue: "1.0",
              color: "#70aff9"
            },
            {
              minvalue: "1.0",
              maxvalue: "2.0",
              color: "#9b42da"
            },
            {
              minvalue: "2.0",
              maxvalue: "3.0",
              color: "#51509c"
            }
          ]
        },
        data: [
          {
            id: "NA",
            value: ".82"
          },
          {
            id: "SA",
            value: "2.04"
          },
          {
            id: "AS",
            value: "1.78"
          },
          {
            id: "EU",
            value: ".40"
          },
          {
            id: "AF",
            value: "2.58"
          },
          {
            id: "AU",
            value: "1.30"
          }
        ]
      },
      ageTrend: {
        chart: {
          showValues: "1",
          showPercentInTooltip: "0",
          numberPrefix: "$",
          theme: "fusion"
        },
        data: [
          {
            label: "> 4yrs old",
            value: "300000"
          },
          {
            label: "5-8yrs old",
            value: "230000"
          },
          {
            label: "9-12yrs old",
            value: "180000"
          },
          {
            label: "13-16yrs old",
            value: "270000"
          },
          {
            label: "> 17yrs old",
            value: "20000"
          }
        ]
      },
      playerTrendParams: {
        width: "90%",
        height: "350",
        type: "spline",
        dataFormat: "json"
      },
      genreTrendParams: {
        width: "90%",
        height: "350",
        type: "column2d",
        dataFormat: "json"
      },
      regionTrendParams: {
        width: "90%",
        height: "350",
        type: "world",
        dataFormat: "json"
      },
      ageTrendParams: {
        type: "pie2d",
        width: "90%",
        height: "350",
        dataFormat: "json"
      },
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
