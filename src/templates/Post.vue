<template>
    <transition name="fade" appear>
        <VideoPlayer v-if="showModal" :post="post" />
    </transition>
</template>

<script>
import { formatTitle } from '@/utilities/formatTitle.js';
import VideoPlayer from '@/components/VideoPlayer';

export default {
    name: 'Post',
    props: {
        posts: { type: Array, required: true },
    },
    components: {
        VideoPlayer,
    },
    data: () => ({
        title: null,
        videoLength: null,
        showModal: false,
        post: {},
    }),

    metaInfo() {
        return {
            title: this.title,
        };
    },
    watch: {
        $route: {
            immediate: true,
            handler: function(newVal) {
                this.showModal = newVal.meta && newVal.meta.showModal;
                this.getPost();
            },
        },
    },

    created() {
        this.getPost();
    },

    methods: {
        getPost() {
            const currentRoute = this.$router.currentRoute.params.postSlug;
            this.title = formatTitle(currentRoute);
            this.post = this.posts.filter((post) => post.slug === currentRoute)[0];
            this.videoLength = this.post.acf.videos.length;
            console.log(currentRoute);
        },
    },
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    opacity: 0;
}
</style>
