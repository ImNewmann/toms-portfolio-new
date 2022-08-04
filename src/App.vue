<template>
    <div id="app">
        <transition name="loading" appear>
            <LoadingAnimation v-if="!loadContent" />
        </transition>
        <transition name="nav" appear>
            <Navbar v-if="loadContent" :posts="posts" :categories="categories" />
        </transition>
        <transition name="page" appear>
            <router-view v-if="loadContent" :posts="posts" :categories="categories"></router-view>
        </transition>
        <Footer v-if="loadContent" />
    </div>
</template>

<script>
import { endPoint } from '@/constants/endpoint.js';
import { getData } from '@/utilities/getData.js';
import { preloadImages } from '@/utilities/preloadImages.js';
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
        categories: [],
    }),

    metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        title: 'Director',
        // all titles will be injected into this template
        titleTemplate: '%s | Tom Newman',
        meta: [
            { charset: 'utf-8' },
            { name: 'description', content: 'Director / London' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
    },

    async created() {
        const categories = await getData(`${endPoint}/categories?orderby=id`);
        this.categories = categories.filter((category) => category.slug !== 'uncategorised');

        this.posts = await getData(`${endPoint}/posts?per_page=100`);

        const featuredCategory = this.categories.filter((cat) => cat.slug === 'featured')[0];
        const imagesToLoad = this.getProjectImages(featuredCategory);

        Promise.all(imagesToLoad.map(preloadImages)).then(() => {
            document.body.classList.add('loaded');
            setTimeout(() => {
                this.loadContent = true;
            }, 500);
        });
    },

    methods: {
        getProjectImages(featuredCat) {
            let visibleImages = [];

            const featuredPosts = this.posts.filter((post) => post.categories.includes(featuredCat.id));

            // 4 Visible projects on screen
            for (let i = 0; i <= 3; i++) {
                visibleImages.push(featuredPosts[i].acf.featured_image.url);
            }
            return visibleImages;
        },
    },
};
</script>
<style lang="scss" scoped>
.page-enter {
    opacity: 0;
}
.page-enter-to {
    opacity: 1;
    transition: all 0.3s 0.5s ease;
}
.page-leave-active {
    opacity: 0;
    transition: all 0.3s ease;
}
</style>
