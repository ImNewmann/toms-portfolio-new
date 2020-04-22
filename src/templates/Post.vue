<template>
  <main class="post-page">
    <div class="post-page__inner">
      <h1 class="post-page__title">{{ post.title.rendered }}</h1>
      <Video :html="post.acf.video" />
      <div class="post-details">
        <Carousel :images="post.acf.carousel_images" />
        <div class="post-details__text">
          <p class="post-details__text-title">{{ post.acf.title }}</p>
          <div class="post-details__text-credits">
            <p>{{ post.acf.director }}</p>
            <p>{{ post.acf.editor }}</p>
            <p>{{ post.acf.producer }}</p>
          </div>
          <p class="post-details__text-title"><i>{{ post.acf.description }}</i></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Video from '@/components/Video';
import Carousel from '@/components/Carousel';

export default {
  name: 'Post',
  props: {
    posts: { type: Array, required: true },
  },
  data:() => ({
    post: [],
  }),
  components: {
    Video,
    Carousel,
  },
  created() {
    const currentRoute = this.$router.currentRoute.params.postSlug;
    this.post = this.posts.filter(post => post.slug === currentRoute)[0];
  },
}
</script>
<style lang="scss">
.post-page {
  width: 100%;
  padding-bottom: 65px;

  &__inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 120px 20px 20px;

    @include breakpoint(desktop) {
      padding: 200px 20px 20px;
    }
  }

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

    &-credits {
      margin: 20px 0;
    }
  }
}
</style>
