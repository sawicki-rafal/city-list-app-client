<template>
  <div class="full-page-wrapper">
    <div>
      <button class="button" :disabled="prevButtonDisabled" @click="getPrev">Prev</button>
      <button class="button" :disabled="nextButtonDisabled" @click="getNext">Next</button>
    </div>
    <form @submit.prevent="findCities" class="form">
      <label for="city-name"></label>
      <input
          v-model="searchCityName"
          type="text"
          name="city-name"
          id="city-name"
          placeholder="city name"/>
      <label for="page-number"></label>
      <input
          v-model="pageNumber"
          type="number"
          name="page-number"
          id="page-number"/>
      <button type="submit">Search</button>
    </form>
    <CityBox v-for="city in cities" v-bind:key="city.id" :city="city" @click="goToCityDetails(city)"></CityBox>
  </div>
</template>

<script>
import cityService from "@/helpers/cityService";
import CityBox from "@/components/CityBox";

export default {
  name: "DashboardView",
  components: {CityBox},
  data() {
    return {
      cities: [],
      searchCityName: '',
      nextButtonDisabled: false,
      prevButtonDisabled: true,
      pageNumber: 0,
    }
  },
  mounted() {
    this.findCities();
  },
  methods: {
    async getCities() {
      const size = 10;
      cityService.getCities(this.pageNumber, size)
          .then(response => {
            console.log(response)
            const data = response.data;
            this.cities = data.content;
            this.nextButtonDisabled = data.last;
            this.prevButtonDisabled = data.first;
          })
          .catch(error => {
            console.log(error);
          });
    },
    async getCitiesByName() {
      const size = 10;
      cityService.getCitiesByNameStartingWith(this.searchCityName, this.pageNumber, size)
          .then(response => {
            console.log(response)
            const data = response.data;
            this.cities = data.content;
            this.nextButtonDisabled = data.last;
            this.prevButtonDisabled = data.first;
          })
          .catch(error => {
            console.log(error);
          });
    },
    findCities() {
      if (this.searchCityName === '') {
        this.getCities();
      } else {
        this.getCitiesByName();
      }
    },
    getNext() {
      this.pageNumber++;
      this.findCities();
    },
    getPrev() {
      this.pageNumber--;
      this.findCities();
    },
    goToCityDetails(city) {
      this.$store.dispatch('city/setCity', city);
      this.$router.push('citydetails');
    }
  }
}
</script>

<style lang="scss" scoped>
.full-page-wrapper {
  @extend %primary-backgroud, %full-page;
  @include centerChildren($vertical-padding, $horizontal-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow-y: scroll;
}

.button {
  @extend %black-outline-button;
}
</style>