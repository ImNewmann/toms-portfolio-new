<template>
    <div class="video-player">
        <div class="video-player__modal">
            <router-link to="/" class="video-player-close-btn">
                <div class="video-player-close-btn__line"></div>
                <div class="video-player-close-btn__line"></div>
            </router-link>
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
    methods: {},
};
</script>

<style lang="scss">
.video-player {
    pointer-events: all;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    opacity: 1;
    transition: opacity 0.3s ease;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 1000;

    &__modal {
        border-radius: 10px;
        left: 50%;
        top: 5%;
        position: absolute;
        transform: translateX(-50%);
        padding: 40px 20px;
        margin: auto;
        background-color: rgba(26, 26, 26, 1);
        max-width: 1000px;
        width: 98%;
        height: auto;

        @include breakpoint(tablet) {
            top: 10%;
            padding: 80px;
        }
    }

    &-close-btn {
        position: absolute;
        top: 25px;
        right: 25px;
        pointer-events: all;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 50px;
        width: 25px;
        will-change: transform;

        &__line {
            height: 2px;
            width: 100%;
            margin-bottom: 15px;
            background-color: white;

            &:nth-child(1) {
                transform: rotate(-45deg) scaleX(1) translateX(-12px) translateY(12px);
            }

            &:nth-child(2) {
                transform: rotate(45deg) scaleX(1) translateX(0px) translateY(0px);
            }
        }
    }

    .post {
        &__title {
            font-family: $font-family-title;
            text-align: center;
            margin-bottom: 40px;
            padding: 0 40px;
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
        }
    }
}
</style>
