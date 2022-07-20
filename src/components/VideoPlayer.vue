<template>
    <div class="video-player">
        <div class="video-player__container">
            <h1 class="post__title" v-html="post.title.rendered"></h1>
            <div class="post__videos">
                <Video />
                <Episodes v-if="post.acf.videos.length > 1" :videos="post.acf.videos" />
            </div>
            <div class="post__details">
                <Carousel v-if="post.acf.carousel_images" :images="post.acf.carousel_images" />
                <div class="post-details__text" v-html="post.acf.details"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Video from '@/components/Video';
import Episodes from '@/components/Episodes';
import Carousel from '@/components/Carousel';

export default {
    name: 'VideoPlayer',
    components: {
        Video,
        Episodes,
        Carousel,
    },
    props: {
        post: { type: Object, default: () => {} },
    },
    methods: {},
};
</script>

<style lang="scss">
.video-player {
    pointer-events: all;
    padding: 50px;
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
    background-color: rgba(20, 20, 20, 0.97);
    z-index: 5;

    &__container {
        width: 80%;
        height: 80%;
        margin-top: 10vh;
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
            color: $black;
            @include breakpoint(tablet) {
                display: inline-block;
                padding-left: 20px;
                width: calc(35% - 20px);
            }
        }
    }
}
</style>
