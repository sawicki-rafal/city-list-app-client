<template>
  <div class="container">
    <div class="id">{{ city.id }}</div>
    <div class="name">{{ city.name }}</div>
    <div class="photo-wrapper">
      <img :src="city.photoUrl" :alt="city.name" class="photo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityDetails",
  props: ['city']
}
</script>

<style lang="scss" scoped>
.container {
  @extend %rounded, %secondary-background;
  @include centerChildren($small-padding, $small-padding);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.id {
  flex-basis: 15%;
}

.name {
  flex-basis: 40%;
}

.photo-wrapper{
  flex-basis: 30%;
}

.photo {
  height: 80px;
}
</style>