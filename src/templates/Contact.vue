<template>
  <main class="page-wrapper about-page" v-if="page.length">
    <h1 class="about-page__title">TOM NEWMAN</h1>
    <div class="about-page__image">
      <img :src="page[0].acf.image.url" :alt="page[0].acf.image.alt" />
    </div>
    <TitleAndText v-for="(item, index) in page[0].acf.title_and_text" 
      :key="index" 
      :title="item.title" 
      :text="item.text" 
    />
  </main>
</template>

<script>
import { getData } from '@/utilities/getData.js';
import { endPoint } from '@/constants/endpoint.js';
import TitleAndText from '@/components/TitleAndText';

export default {
  name: 'Contact',
  components: { 
    TitleAndText,
  },
  data: () => ({
    page: [],
  }),
  async created () {
    const slug = this.$router.currentRoute.path.slice(1);
    this.page = await getData(`${endPoint}/pages?slug=${slug}`)
  }
}
</script>
<style lang="scss">
.about-page {
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
