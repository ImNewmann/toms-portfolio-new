<template>
    <section :class="['posts', this.scrollLock ? 'lock-scroll' : '']">
        <div v-for="(category, index) in categories" :key="index">
            <div class="category-title">
                {{ category.name }}
            </div>
            <VideoCarousel
                :posts="getPostsFromCategories(category.id)"
                :orientation="category.acf.orientation"
            />
        </div>
        <router-view :posts="posts"></router-view>
    </section>
</template>

<script>
import { endPoint } from '@/constants/endpoint.js';
import { getData } from '@/utilities/getData.js';
import VideoCarousel from '@/components/VideoCarousel';

export default {
    name: 'FrontPage',
    props: {
        posts: { type: Array, required: true },
    },
    components: { VideoCarousel },

    data: () => ({
        categories: [],
        scrollLock: false,
    }),

    async created() {
        const categories = await getData(`${endPoint}/categories?orderby=id`);
        this.categories = categories.filter((category) => category.slug !== 'uncategorised');
    },

    methods: {
        getPostsFromCategories(categoryID) {
            return this.posts.filter((post) => post.categories[0] === categoryID);
        },
    },
};
</script>

<style lang="scss">
.posts {
    margin: 0 auto;
    margin-top: 200px;
    width: 90%;
    padding-bottom: 65px;

    // @include breakpoint(desktop) {
    //     max-width: 1400px;
    // }

    .category-title {
        font-family: $font-family-title;
        margin-bottom: 20px;
        color: $white;
    }

    .video-carousel {
        margin-bottom: 30px;
    }
}

.lock-scroll {
    overflow: hidden;
}
</style>
