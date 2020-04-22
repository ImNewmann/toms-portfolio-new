<template>
  <router-link class="next-post-thumbnail" :to="'/' + postData.slug">
    <img class="next-post-thumbnail__image" :src="postData.acf.featured_images.image.url" :alt="postData.acf.featured_images.image.alt" />
  </router-link>
</template>

<script>
export default {
  name: 'NextPostThumbnail',
  props: {
    postData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.next-post-thumbnail {
  display: block;
  position: relative;
  cursor: pointer;
  width: 100%;
  margin-top: 100px;

  &__image {
    width: 100%;
    filter: blur(5px);

  }

  &:after {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(5px);
  }
}
</style>