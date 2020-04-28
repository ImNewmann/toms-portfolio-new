<template>
  <div class="post-thumbnail">
    <router-link class="post-thumbnail-link" :to="'/' + postData.slug">

      <img :class="[
      'post-thumbnail__image', 
      { 'post-thumbnail__image--hide-mobile': !image1.contains_project_title }]" 
      :src="image1.image.url" 
      :alt="image1.image.alt" />

      <img :class="[
      'post-thumbnail__image', 
      { 'post-thumbnail__image--hide-mobile': !image2.contains_project_title }]" 
      :src="image2.image.url"
      :alt="image2.image.alt" />

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
  created() {
    this.image1 = this.postData.acf.featured_images.image;
    this.image2 = this.postData.acf.featured_images.image_2;
  }
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

    &--hide-mobile {
      display: none;

      @include breakpoint(desktop) {
        display: block;
      }
    }
  }
}
</style>