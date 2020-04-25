<template>
  <div class="title-and-text">
    <h2 class="title"> {{ title }}</h2>
    <div class="text" v-html="text"></div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TitleAndText',
  props: {
    title: { type: String, default: null },
    text: { type: String, default: null },
  },
}
</script>

<style lang="scss">
.title-and-text {
  text-align: center;
  margin: 0 auto 50px auto;

  .title {
    font-family: $font-family-title;
    color: $black;
    margin-bottom: 20px;
  }

  .text {
    font-family: $font-family-content;
    color: $black;
  }
}

</style>