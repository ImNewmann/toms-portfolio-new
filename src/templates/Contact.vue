<template>
  <main class="about-page" v-if="page.length">
    <div class="about-page__inner">
      <h1 class="about-page__title">TOM NEWMAN</h1>
      <div class="about-page__image">
        <img :src="page[0].acf.image.url" :alt="page[0].acf.image.alt" />
      </div>
      <TitleAndText v-for="(item, index) in page[0].acf.title_and_text" 
        :key="index" 
        :title="item.title" 
        :text="item.text" 
      />
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import { endPoint } from '@/constants/endpoint.js';
import TitleAndText from '@/components/TitleAndText';

export default {
  components: { 
    TitleAndText,
  },
  data: () => ({
    page: [],
  }),
  async created () {
    const slug = this.$router.currentRoute.path.slice(1);
    await axios.get(`${endPoint}/pages?slug=${slug}`).then(res => this.page = res.data);
  }
}
</script>
<style lang="scss">
.about-page {
  width: 100%;

  &__inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 120px 20px 0;

    @include breakpoint(desktop) {
      padding: 180px 20px 0;
    }
  }

  &__title {
    font-family: $font-family-title;
    text-align: center;
    margin-bottom: 40px;
    color: $pink;
  }

  &__image {
    max-width: 400px;
    margin: 0 auto 50px auto;
  }

  .title-and-text {
    max-width: 700px;
  }
}
</style>
