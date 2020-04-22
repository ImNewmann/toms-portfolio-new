<template>
  <section class="posts">
    <PostThumbnail v-for="(post, index) in posts" :key="index" :postData="post" />
  </section>
</template>

<script>
import PostThumbnail from '@/components/PostThumbnail';
export default {
  name: 'FrontPage',
  props: {
    posts: { type: Array, required: true },
  },
  components: { PostThumbnail },
}
</script>

<style lang="scss">
.posts {
  margin: 0 auto;
  width: 100vw;
  padding-bottom: 65px;
}
</style>