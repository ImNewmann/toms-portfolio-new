<template>
  <main class="page-wrapper post-page">
    <h1 class="post-page__title" v-html="post.title.rendered"></h1>
    <Video v-for="(video, index) in post.acf.videos" :key="index" :html="video.video" />
    <div class="post-details">
      <Carousel v-if="post.acf.carousel_images" :images="post.acf.carousel_images" />
      <div class="post-details__text" v-html="post.acf.details">
      </div>
    </div>
  </main>
</template>

<script>
import { formatTitle } from '@/utilities/formatTitle.js'
import Video from '@/components/Video';
import Carousel from '@/components/Carousel';

export default {
  name: 'Post',
  props: {
    posts: { type: Array, required: true },
  },
  components: {
    Video,
    Carousel,
  },
  data: () => ({
    post: [],
    title: null,
  }),

  metaInfo() {
    return {
      title: this.title,
    }
  },

  created() {
    const currentRoute = this.$router.currentRoute.params.postSlug;
    this.title = formatTitle(currentRoute);
    this.post = this.posts.filter(post => post.slug === currentRoute)[0];
  },
}
</script>
<style lang="scss">
.post-page {

  &__title {
    font-family: $font-family-title;
    text-align: center;
    margin-bottom: 40px;
    color: $black;
  }
}

.post-details {
  display: block;

  .carousel {
    @include breakpoint(tablet) {
      display: inline-block;
      width: 65%;
    }
  }

  &__text {
    font-family: $font-family-content;
    font-weight: 300;
    vertical-align: top;
    color: $black;

    @include breakpoint(tablet) {
      display: inline-block;
      padding-left: 20px;
      width: calc(35% - 20px);
    }
  }
}
</style>
