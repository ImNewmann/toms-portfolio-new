<template>
  <div id="app">
    <Navbar v-if="posts.length" :posts="posts" />
    <transition name="page" appear>
        <router-view v-if="posts.length" :posts="posts"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navigation/Navbar';
import '@/assets/scss/main.scss';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
      // pages: state => state.pages,
    })
  },

  created () {
    this.$store.dispatch('loadPosts');
    // this.$store.dispatch('loadPages');
  },
}
</script>
<style lang="scss" scoped>
.page-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.page-leave-active {
  opacity: 0;
  transition: all 0.4s ease;
}
</style>