<template>
  <div>
    <div class="block-view-background"></div>
    <div class="block-view-wrapper">
      <div class="block">
        <span class="title big">
          {{ city.id + ':' + city.name }}
        </span>
        <img :src="city.photoUrl" :alt="city.name">
        <span>
          {{ city.photoUrl }}
        </span>
        <button class="button" @click="toggleForm">Edit</button>
        <form v-if="showForm" @submit.prevent="editCity" class="form">
          <label for="name"></label>
          <input
              v-model="city.name"
              type="text"
              name="name"
              id="name"/>
          <label for="photoUrl"></label>
          <input
              v-model="city.photoUrl"
              type="text"
              name="photoUrl"
              id="photoUrl"/>
          <button type="submit">Save</button>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import cityService from "@/helpers/cityService";

export default {
  name: "CityDetailView",
  data() {
    return {
      city: {
        id: '',
        name: '',
        photoUrl: ''
      },
      showForm: false
    }
  },
  mounted() {
    this.clearCity();
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    clearCity() {
      this.city = this.$store.state.city.city;
    },
    editCity() {
      cityService.editCity(this.city.id, {name: this.city.name, photoUrl: this.city.photoUrl})
          .then(response => {
            console.log(response.data)
            this.toggleForm();
          })
          .catch(error => {
            this.$store.dispatch('exception/addError', error);
            console.log(error.response.status);
          });
    }
  }
}
</script>

<style lang="scss" scoped>
.block-view-background {
  @extend %full-page, %secondary-background;
  position: fixed;
  top: 0;
  z-index: -1;

  @media screen and (min-width: $l-breakpoint) {
    &::after {
      content: '';
      background: rgba(0, 0, 0, .2);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100vh;
    }
  }
}

.block-view-wrapper {
  @extend %background-wrapper;
}

.block {
  @extend %block;
}

.button {
  @extend %black-outline-button;
}
</style>