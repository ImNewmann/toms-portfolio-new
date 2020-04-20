<template>
  <div class="post-thumbnail">
    <router-link :to="'/' + postData.slug">
      <img :src="postData.acf.featured_image.url" :alt="postData.acf.featured_image" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PostThumbnail',
  props: {
    postData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.post-thumbnail {
  cursor: pointer;
  width: 100%;
  transition: filter 0.6s ease;

  &:hover {
    filter: grayscale(100%);
  }
}
</style>