<template>
  <div class="rows">
    <div class="d-flex flex-column">
      <section class="hero is-primary mb-5" id="header">
        <div class="hero-body">
          <div class="container-fluid ml-5">
            <h1 class="header-title has-text-white title is-3">
              Manage Developers
            </h1>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-7">
            <div class="box m-form">
              <label class="label">Search Person Name</label>
              <div class="control is-grouped">
                <p class="control is-expanded">
                  <input
                    class="input"
                    v-model="searchItem"
                    v-on:keyup="searchInTheList(searchItem)"
                    type="text"
                    placeholder="Find a person"
                  />
                  <span class="help is-dark"
                    ><strong>{{ filteredItems.length | numeral }}</strong> of
                    {{ items.length | numeral }} person(s) found</span
                  >
                </p>
                <p class="control">
                  <a
                    class="button is-info"
                    v-on:click="clearSearchItem"
                    v-bind:class="{ 'is-disabled': searchItem == '' }"
                  >
                    Clear
                  </a>
                </p>
              </div>
            </div>
            <div class="box m-tags">
              <div class="row">
                <div class="col-3">
                  <span
                    ><strong>{{ selectedItems.length }}</strong> person(s)
                    selected</span
                  >
                </div>
                <div class="col-3">
                  <button
                    :disabled="!(selectedItems.length > 0)"
                    class="btn btn-outline-success"
                    @click="(viewPopup = true), (popupAction = 'Activate')"
                  >
                    Activate
                  </button>
                </div>
                <div class="col-3">
                  <button
                    :disabled="!(selectedItems.length > 0)"
                    class="btn btn-outline-warning"
                    @click="(viewPopup = true), (popupAction = 'Suspend')"
                  >
                    Suspend
                  </button>
                </div>
                <div class="col-3">
                  <button
                    :disabled="!(selectedItems.length > 0)"
                    class="btn btn-outline-danger"
                    @click="(viewPopup = true), (popupAction = 'Delete')"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div class="m-tags-items">
                <a
                  v-for="item in selectedItems"
                  :key="item"
                  v-on:click="removeSelectedItem(item)"
                  class="tag is-dark is-small"
                >
                  {{ item.name }}
                  <button class="delete is-small"></button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="box m-form h-100">
              <label class="label">Filters</label>
              <div class="control is-grouped">
                <span class="help is-dark">By Region:</span>
                <a
                  v-for="region in regions"
                  :key="region"
                  class="button is-rounded is-info is-small is-outlined m-1"
                  @click="
                    selectedRegions.includes(region)
                      ? selectedRegions.pop(region)
                      : selectedRegions.push(region),
                      searchInTheList(searchItem)
                  "
                  :class="{ 'is-hovered': selectedRegions.includes(region) }"
                >
                  {{ region }}
                </a>
              </div>
              <div class="control is-grouped">
                <span class="help is-dark">By Status:</span>
                <a
                  v-for="status in ['Active', 'Suspended']"
                  :key="status"
                  class="button is-rounded is-info is-small is-outlined m-1"
                  @click="
                    selectedStatus.includes(status)
                      ? selectedStatus.pop(status)
                      : selectedStatus.length < 1
                      ? selectedStatus.push(status)
                      : ((selectedStatus = []), selectedStatus.push(status)),
                      searchInTheList(searchItem)
                  "
                  :class="{ 'is-hovered': selectedStatus.includes(status) }"
                >
                  {{ status }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container is-fluid mt-5">
        <nav class="pagination m-pagination">
          <a
            class="button"
            v-on:click="selectPage(pagination.currentPage - 1)"
            :disabled="
              pagination.currentPage == pagination.items[0] ||
                pagination.items.length == 0
            "
            >Previous</a
          >
          <ul class="d-flex flex-row">
            <li>
              <a
                class="button"
                v-on:click="selectPage(pagination.items[0])"
                :disabled="
                  pagination.currentPage == pagination.items[0] ||
                    pagination.items.length == 0
                "
              >
                First
              </a>
            </li>
            <li class="is-space"></li>
            <li v-for="item in pagination.filteredItems" :key="item">
              <a
                class="button"
                v-on:click="selectPage(item)"
                v-bind:class="{ 'is-info': item == pagination.currentPage }"
                >{{ item | numeral }}</a
              >
            </li>
            <li class="is-space"></li>
            <li>
              <a
                class="button"
                v-on:click="
                  selectPage(pagination.items[pagination.items.length - 1])
                "
                :disabled="
                  pagination.currentPage ==
                    pagination.items[pagination.items.length - 1] ||
                    pagination.items.length == 0
                "
              >
                Last
              </a>
            </li>
          </ul>
          <a
            class="button"
            v-on:click="selectPage(pagination.currentPage + 1)"
            :disabled="
              pagination.currentPage ==
                pagination.items[pagination.items.length - 1] ||
                pagination.items.length == 0
            "
            >Next page</a
          >
        </nav>
      </div>

      <div class="container is-fluid m-table">
        <table class="table is-bordered is-striped is-narrow">
          <tr>
            <th style="width: 8%" class="m-table-index">#</th>
            <th style="width: 20%">Name</th>
            <th style="width: 20%">Region</th>
            <th style="width: 20%">Age</th>
            <th style="width: 20%">Status</th>
            <th style="width: 8%"></th>
          </tr>
          <tr v-for="item in paginatedItems" :key="item">
            <td>{{ item.key }}</td>
            <td>{{ item.name }}</td>
            <td>{{ region(item.region) }}</td>
            <td>{{ item.age }}</td>
            <td>{{ status(item.status) }}</td>
            <td style="text-align:center;">
              <a
                class="button is-info is-outlined"
                v-on:click="selectItem(item)"
                >Select</a
              >
            </td>
          </tr>
        </table>
      </div>
    </div>
    <transition name="modal" v-if="viewPopup">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div
            class="modal-container p-0 w-50"
            style="border-radius: 2rem 2rem"
          >
            <div class="modal-header p-0">
              <slot name="header">
                <div
                  class="hero is-bold w-100 "
                  :class="{
                    'bg-success': popupAction === 'Activate',
                    'bg-warning': popupAction === 'Suspend',
                    'bg-danger': popupAction === 'Delete'
                  }"
                  style="border-radius: 2rem 2rem 0 0"
                >
                  <div class="hero-body">
                    <div class="container-fluid ml-5">
                      <h1 class="header-title title is-3 has-text-white">
                        {{ popupAction }}
                      </h1>
                    </div>
                  </div>
                </div>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <div class="container pl-5">
                  <h3 class="header-title h3 has-text-black">
                    Commit Action to Selected Users?
                  </h3>
                </div>
                <div class="m-auto box m-tags w-75">
                  <span
                    ><strong>{{ selectedItems.length }}</strong> person(s)
                    selected</span
                  >
                  <div class="m-tags-items">
                    <a
                      v-for="item in selectedItems"
                      :key="item"
                      class="tag is-dark is-small disabled"
                    >
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button
                  class="btn btn-outline-secondary"
                  @click="viewPopup = false"
                >
                  CANCEL
                </button>
                <button
                  class="btn"
                  :class="{
                    'btn-success': popupAction === 'Activate',
                    'btn-warning': popupAction === 'Suspend',
                    'btn-danger': popupAction === 'Delete'
                  }"
                >
                  CONFIRM
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
var Chance = require("chance");
var _ = require("lodash");
var chance = new Chance();

export default {
  data() {
    return {
      viewPopup: false,
      popupAction: "",
      searchItem: "",
      items: [],
      filteredItems: [],
      paginatedItems: [],
      selectedItems: [],
      pagination: {
        range: 5,
        currentPage: 1,
        itemPerPage: 5,
        items: [],
        filteredItems: []
      },
      genres: [
        { name: "Puzzle", icon: "puzzle-piece" },
        { name: "Quiz", icon: "lightbulb" },
        { name: "Arcade", icon: "ghost" },
        { name: "Cards", icon: "dice" },
        { name: "Sport", icon: "futbol" }
      ],
      regions: [
        "Asia",
        "Australia",
        "Europe",
        "Africa",
        "North America",
        "South America"
      ],
      ages: ["< 4", "4-8", "9-12", "13-16", "> 17"],
      selectedRegions: [],
      selectedAges: [],
      selectedStatus: []
    };
  },
  methods: {
    region(r) {
      switch (r) {
        case "NA":
          return "North America";
        case "SA":
          return "South America";
        case "AS":
          return "Asia";
        case "EU":
          return "Europe";
        case "AF":
          return "Africa";
        case "AU":
          return "Australia";
      }
    },
    rregion(r) {
      switch (r) {
        case "North America":
          return "NA";
        case "South America":
          return "SA";
        case "Asia":
          return "AS";
        case "Europe":
          return "EU";
        case "Africa":
          return "AF";
        case "Australia":
          return "AU";
      }
    },
    age(a) {
      switch (a) {
        case "< 4":
          return [1, 2, 3];
        case "4-8":
          return [4, 5, 6, 7, 8];
        case "9-12":
          return [9, 10, 11, 12];
        case "13-16":
          return [13, 14, 15, 16];
        case "> 17":
          return [a];
      }
    },
    status(s) {
      switch (s) {
        case true:
          return "Active";
        case false:
          return "Suspended";
      }
    },
    log() {
      console.log(this.selectedStatus);
    },
    clearSearchItem() {
      this.searchItem = undefined;
      this.searchInTheList("");
    },
    searchInTheList(searchText, currentPage) {
      // eslint-disable-next-line no-unused-vars
      var vm = this;
      if (_.isUndefined(searchText)) {
        // eslint-disable-next-line no-unused-vars
        this.filteredItems = _.filter(this.items, function(v, k) {
          return (
            !v.selected &&
            (vm.selectedRegions.length
              ? vm.selectedRegions.includes(vm.region(v.region))
              : true) &&
            (vm.selectedAges.length
              ? vm.age(vm.selectedAges[0]).includes(v.age)
              : true) &&
            (vm.selectedStatus.length
              ? vm.selectedStatus.includes(vm.status(v.status))
              : true)
          );
        });
      } else {
        // eslint-disable-next-line no-unused-vars
        this.filteredItems = _.filter(this.items, function(v, k) {
          return (
            !v.selected &&
            v.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 &&
            (vm.selectedRegions.length
              ? vm.selectedRegions.includes(vm.region(v.region))
              : true) &&
            (vm.selectedAges.length
              ? vm.age(vm.selectedAges[0]).includes(v.age)
              : true) &&
            (vm.selectedStatus.length
              ? vm.selectedStatus.includes(vm.status(v.status))
              : true)
          );
        });
      }
      this.filteredItems.forEach(function(v, k) {
        v.key = k + 1;
      });
      this.buildPagination();

      if (_.isUndefined(currentPage)) {
        this.selectPage(1);
      } else {
        this.selectPage(currentPage);
      }
    },
    buildPagination() {
      let numberOfPage = Math.ceil(
        this.filteredItems.length / this.pagination.itemPerPage
      );
      this.pagination.items = [];
      for (var i = 0; i < numberOfPage; i++) {
        this.pagination.items.push(i + 1);
      }
    },
    selectPage(item) {
      this.pagination.currentPage = item;

      let start = 0;
      let end = 0;
      if (this.pagination.currentPage < this.pagination.range - 2) {
        start = 1;
        end = start + this.pagination.range - 1;
      } else if (
        this.pagination.currentPage <= this.pagination.items.length &&
        this.pagination.currentPage >
          this.pagination.items.length - this.pagination.range + 2
      ) {
        start = this.pagination.items.length - this.pagination.range + 1;
        end = this.pagination.items.length;
      } else {
        start = this.pagination.currentPage - 2;
        end = this.pagination.currentPage + 2;
      }
      if (start < 1) {
        start = 1;
      }
      if (end > this.pagination.items.length) {
        end = this.pagination.items.length;
      }

      this.pagination.filteredItems = [];
      for (var i = start; i <= end; i++) {
        this.pagination.filteredItems.push(i);
      }

      this.paginatedItems = this.filteredItems.filter((v, k) => {
        return (
          Math.ceil((k + 1) / this.pagination.itemPerPage) ==
          this.pagination.currentPage
        );
      });
    },
    selectItem(item) {
      item.selected = true;
      this.selectedItems.push(item);
      this.searchInTheList(this.searchItem, this.pagination.currentPage);
    },
    removeSelectedItem(item) {
      item.selected = false;
      this.selectedItems.splice(item, 1);
      this.searchInTheList(this.searchItem, this.pagination.currentPage);
    }
  },
  mounted() {
    for (var i = 0; i < 20000; i++) {
      this.items.push({
        key: i + 1,
        name: chance.word(), // SSN as person ID
        region: chance.pickone(["NA", "SA", "AS", "EU", "AF", "AU"]),
        age: chance.age({ type: "child" }),
        status: chance.bool(),
        selected: false
      });
    }
    this.filteredItems = this.items;
    this.buildPagination();
    this.selectPage(1);
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.absolute-wrap {
  left: 30%;
  top: 20%;
}

.popup {
  background-color: #ffffff;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  top: 0;
}

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
    margin-left: 4rem;
    margin-right: 2rem;
    margin-top: 2rem;
  }
}

.disabled,
.button[disabled],
.btn[disabled] {
  pointer-events: none;
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

.rounded-big {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2rem 2rem;
}

#header {
  border-radius: 2rem 2rem 0 0;
}

.m-pagination {
  .is-space {
    width: 20px;
  }
}

.m-table {
  margin-top: 20px;

  tr th {
    background: #c0c0c0;
    color: #393939;
  }
}

.m-table-index {
  width: 20px;
}

.m-tags-items {
  margin-top: 5px;
  height: 60px;
  overflow-y: scroll;

  .tag {
    margin-bottom: 5px;
    margin-right: 3px;
  }
}
</style>
