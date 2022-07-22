<template>
    <div class="video-player">
        <div class="video-player__container">
            <h1 class="post__title" v-html="post.title.rendered"></h1>

            <div class="post__videos">
                <Video v-for="(video, index) in post.acf.videos" :key="index" :html="video.video" />
            </div>
            <div class="post__details">
                <div class="post-details__text" v-html="post.acf.details"></div>
                <ImageCarousel v-if="post.acf.carousel_images" :images="post.acf.carousel_images" />
            </div>
        </div>
    </div>
</template>

<script>
import Video from '@/components/Video';
import ImageCarousel from '@/components/Carousel';

export default {
    name: 'VideoPlayer',
    components: {
        Video,
        ImageCarousel,
    },
    props: {
        post: { type: Object, default: () => {} },
    },

    created() {
        console.log(this.post);
    },
    methods: {},
};
</script>

<style lang="scss">
.video-player {
    pointer-events: all;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    opacity: 1;
    transition: opacity 0.3s ease;
    background-color: rgba(20, 20, 20, 0.85);
    z-index: 5;

    &__container {
        width: 100%;
        height: 80%;
        margin-top: 120px;

        @include breakpoint(tablet) {
            width: 80%;
        }

        @include breakpoint(desktop) {
            width: 60%;
            margin-top: 19vh;
        }
    }

    .post {
        &__title {
            font-family: $font-family-title;
            text-align: center;
            margin-bottom: 40px;
            color: $white;
        }
    }
    .post-details {
        display: block;
        .carousel {
            @include breakpoint(tablet) {
                display: inline-block;
                width: 65%;
            }
        }
        &__text {
            font-family: $font-family-content;
            font-weight: 300;
            vertical-align: top;
            color: $white;
            margin-bottom: 20px;
            @include breakpoint(tablet) {
                display: inline-block;
                padding-left: 20px;
                width: calc(35% - 20px);
            }
        }
    }
}
</style>
