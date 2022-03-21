<template>
  <div>
    <div class="block-view-background"></div>
    <div class="block-view-wrapper">
      <div class="block">
        <span class="title big">
          <slot name="title"></slot>
        </span>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AbstractBlockView'
  };
</script>

<style lang="scss" scoped>
  .block-view-background {
    @include image-background("../assets/block-view-background.jpg");
  }

  .block-view-wrapper {
    @extend %background-wrapper;
  }

  .block {
    @extend %block;
  }
</style>
