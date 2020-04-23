<template>
  <router-link class="post-thumbnail" :to="'/' + postData.slug">
    <img class="post-thumbnail__image" :src="postData.acf.featured_images.image.url" :alt="postData.acf.featured_images.image.alt" />
    <img class="post-thumbnail__image" :src="postData.acf.featured_images.image_2.url" :alt="postData.acf.featured_images.image_2.alt" />
  </router-link>
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

  @include breakpoint(desktop) {
    display: flex;
    flex-direction: row;
  }

  &__image {
    width: 100%;

    @include breakpoint(desktop) {
      width: 50%;
    }

    &:last-of-type {
      display: none;

      @include breakpoint(desktop) {
        display: block;
      }
    }
  }

  &:nth-child(odd) {
    .post-thumbnail__image:first-of-type {
      order: 2;
    }
  }

  &:hover {
    filter: grayscale(100%);
  }
}
</style>