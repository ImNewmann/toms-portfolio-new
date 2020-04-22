<template>
  <div id="app">
    <LoadingAnimation v-if="!loadContent" />
    <transition name="nav" appear>
      <Navbar v-if="loadContent" :posts="posts" />
    </transition>
    <transition name="page" appear>
        <router-view v-if="loadContent" :posts="posts"></router-view>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import { endPoint } from '@/constants/endpoint.js';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navbar from '@/components/Navigation/Navbar';
import '@/assets/scss/main.scss';

export default {
  name: 'App',
  components: {
    LoadingAnimation,
    Navbar,
  },
  data: () => ({
    loadContent: false,
    posts: [],
  }),

  async created () {
    await axios.get(`${endPoint}/posts`).then(res => {
      this.posts = res.data;
    
      const imagesToLoad = this.posts.map(post => post.acf.featured_image.url);
      
      Promise.all(imagesToLoad.map(this.preloadImages)).then(() => {
        document.body.classList.add('loaded');
        setTimeout(() => {
          this.loadContent = true;
        }, 2000)
      });
    });
  },

  methods: {
    preloadImages(path) {
      return new Promise(resolve => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve({ path, status: "ok" });
      });
    },
  },
}
</script>
<style lang="scss" scoped>
.page-enter {
  opacity: 0;
}
.page-enter-to {
  opacity: 1;
  transition: all 0.4s ease;
}
.page-leave-active {
  opacity: 0;
  transition: all 0.4s ease;
}
</style>