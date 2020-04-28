<template>
  <div class="post-thumbnail">
    <router-link class="post-thumbnail-link" :to="'/' + postData.slug">
      <img class="post-thumbnail__image" :src="postData.acf.featured_images.image.url" :alt="postData.acf.featured_images.image.alt" />
      <img class="post-thumbnail__image" :src="postData.acf.featured_images.image_2.url" :alt="postData.acf.featured_images.image_2.alt" />
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
  transition: filter 0.4s ease;

  @include breakpoint(desktop) {
    display: flex;
    flex-direction: row;
  }

  &:hover {
    filter: grayscale(100%);
  }

  &-link {
    @include breakpoint(desktop) {
      display: flex;
    }
  }

  &__image {
    width: 100%;

    @include breakpoint(desktop) {
      height: 100%;
      width: 50%;
    }

    &:last-of-type {
      display: none;

      @include breakpoint(desktop) {
        display: block;
      }
    }
  }
}
</style>