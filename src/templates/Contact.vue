<template>
  <main class="about-page" v-if="page.length">
    <h1 class="about-page__title">TOM NEWMAN</h1>
    <div class="about-page__image">
      <img :src="page[0].acf.image.url" :alt="page[0].acf.image.alt" />
    </div>
    <TitleAndText v-for="(item, index) in page[0].acf.title_and_text" 
      :key="index" 
      :title="item.title" 
      :text="item.text" />
  </main>
</template>

<script>
import axios from 'axios';
import { endPoint } from '@/constants/endpoint.js';
import TitleAndText from '@/components/TitleAndText';

export default {
  components: { TitleAndText },
  data: () => ({
    page: [],
  }),
  async created () {
    const slug = this.$router.currentRoute.path.slice(1);
    await axios.get(`${endPoint}/pages?slug=${slug}`).then(res => {
      console.log('got page data');
      this.page = res.data;
    });
  }
}
</script>
<style lang="scss">
.about-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 150px 20px 20px;

  @include breakpoint(desktop) {
    padding: 200px 20px 20px;
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
