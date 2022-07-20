<template>
    <div class="video-carousel" :data-orientation="orientation">
        <swiper class="swiper" :options="swiperOptions">
            <swiper-slide
                :class="videoPreviewData.length && videoPreviewData[index].show ? 'show-preview' : ''"
                v-for="(post, index) in posts"
                :key="index"
                :data-preview-loaded="videoPreviewData.length && videoPreviewData[index].loaded"
                :data-preview-delay-reveal="videoPreviewData.length && videoPreviewData[index].delayReveal"
            >
                <router-link :to="`/${post.slug}`">
                    <div
                        class="post-overlay"
                        v-html="post.title.rendered"
                        @mouseover="() => handleMouseOver(index)"
                        @mouseleave="() => handleMouseLeave(index)"
                    ></div>
                    <div class="post-video-preview">
                        <VideoPreview
                            v-if="videoPreviewData.length && videoPreviewData[index].initLoad"
                            :play="videoPreviewData.length && videoPreviewData[index].show"
                            :pause="videoPreviewData.length && !videoPreviewData[index].show"
                            :orientation="orientation"
                            :controls="false"
                            :autoplay="true"
                            @videoReady="() => previewReady(index)"
                        />
                    </div>
                    <img :src="post.acf.featured_images.image.image.url" :alt="post.title.rendered" />
                </router-link>
            </swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import VideoPreview from '@/components/VideoPreview';

export default {
    name: 'VideoCarousel',
    components: {
        Swiper,
        SwiperSlide,
        VideoPreview,
    },
    props: {
        posts: { type: Array, required: true },
        orientation: { type: String, default: 'Portrait' },
    },
    data: () => ({
        swiperOptions: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            breakpoints: {
                640: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        videoPreviewData: [],
    }),
    mounted() {
        this.posts.forEach(() =>
            this.videoPreviewData.push({
                initLoad: false,
                loaded: false,
                show: false,
                delayReveal: false,
            })
        );
    },

    methods: {
        handleMouseOver(index) {
            this.videoPreviewData[index].initLoad = true;
            this.videoPreviewData[index].show = true;
            this.videoPreviewData[index].delayReveal = false;
        },

        handleMouseLeave(index) {
            this.videoPreviewData[index].show = false;
        },

        previewReady(index) {
            this.videoPreviewData[index].loaded = true;
            this.videoPreviewData[index].delayReveal = true;
        },
    },
};
</script>

<style lang="scss" scoped>
.video-carousel {
    width: 100%;

    .swiper-container {
        width: 100%;
        height: 100%;
        overflow: visible;

        .swiper-wrapper {
            padding: 20px 0;
        }
    }

    &[data-orientation='Portrait'] {
        .swiper-slide {
            height: 64vh;

            img {
                height: 100%;
                object-fit: cover;
            }

            &:hover {
                width: 64vw !important;
            }
        }
    }

    &[data-orientation='Landscape'] .swiper-slide:hover {
        transform: scale(1.2);
    }

    .swiper-slide {
        position: relative;
        transition: 250ms all;
        overflow: hidden;
        border-radius: 3px;

        &:hover {
            z-index: 1;
            cursor: pointer;

            .post-overlay {
                opacity: 1;
            }
        }

        &:first-child:hover {
            margin: 0 40px;
        }

        &:last-child:hover {
            margin: 0 -40px;
        }

        .post-overlay {
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            top: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            font-family: $font-family-content;
            font-size: 14px;
            color: $white;
            padding: 0 10px 10px 0;
            opacity: 0;
            transition: opacity 0.5s ease;
            z-index: 2;
        }

        .post-video-preview {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease;
            z-index: 1;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    }

    .show-preview[data-preview-loaded='true'] {
        .post-video-preview {
            opacity: 1;
        }

        &[data-preview-delay-reveal='true'] {
            .post-video-preview {
                transition-delay: 0.5s;
            }
        }
    }
}
</style>
