<template>
  <div id="app">
    <transition name="loading" appear>
      <LoadingAnimation v-if="!loadContent" />
    </transition>
    <transition name="nav" appear>
      <Navbar v-if="loadContent" :posts="posts" />
    </transition>
    <transition name="page" appear>
      <keep-alive>
        <router-view v-if="loadContent" :posts="posts" :key="$route.path"></router-view>
      </keep-alive>
    </transition>
    <Footer v-if="loadContent" />
  </div>
</template>

<script>
import { endPoint } from '@/constants/endpoint.js';
import { getData } from '@/utilities/getData.js';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer';
import '@/assets/scss/main.scss';

export default {
  name: 'App',
  components: {
    LoadingAnimation,
    Navbar,
    Footer,
  },

  data: () => ({
    loadContent: false,
    posts: [],
  }),

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Creative Director | Tom Newman',
    // all titles will be injected into this template
    titleTemplate: '%s | Tom Newman'
  },

  async created () {
    this.posts = await getData(`${endPoint}/posts?per_page=20`);
    const imagesToLoad = this.getProjectImages();

    Promise.all(imagesToLoad.map(this.preloadImages)).then(() => {
      document.body.classList.add('loaded');
      setTimeout(() => { this.loadContent = true }, 500);
    });
  },

  methods: {
    getProjectImages() {
      let visibleImages = [];
      const images = this.posts.map(post => post.acf.featured_images)
      // 3 Visible projects on screen
      for (let i = 0; i <= 3; i++) {
        visibleImages.push(images[i].image.image.url);
        visibleImages.push(images[i].image_2.image.url)
      }
      return visibleImages;
    },

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
  transition: all 0.3s 0.35s ease;
}
.page-leave-active {
  opacity: 0;
  transition: all 0.3s ease;
}
</style>