<template>
    <div class="video-carousel" :data-orientation="orientation">
        <swiper ref="swiper" class="swiper" :options="swiperOptions">
            <swiper-slide
                :class="['video-carousel-slide', videoPreviewData.length && videoPreviewData[index].show ? 'video-carousel-slide--preview-reveal' : '']"
                v-for="(post, index) in posts"
                :key="index"
                :data-preview-loaded="videoPreviewData.length && videoPreviewData[index].loaded"
                :data-preview-delay-reveal="videoPreviewData.length && videoPreviewData[index].delayReveal"
            >
                <router-link :to="`/${post.slug}`">
                    <div v-if="breakpoint === DESKTOP">
                        <div class="video-carousel-slide__overlay" v-html="post.title.rendered" @mouseover="() => handleMouseOver(index)" @mouseleave="() => handleMouseLeave(index)"></div>
                        <div class="video-carousel-slide__preview">
                            <VideoPreview
                                v-if="videoPreviewData.length && videoPreviewData[index].initLoad"
                                :post="post"
                                :play="videoPreviewData.length && videoPreviewData[index].show"
                                :orientation="orientation"
                                :controls="false"
                                :autoplay="true"
                                @videoReady="() => previewReady(index)"
                            />
                        </div>
                    </div>

                    <img class="video-carousel-slide__thumbnail" :src="getFeaturedImage(post)" :alt="post.title.rendered" />
                </router-link>
            </swiper-slide>
            <div class="swiper-button swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { breakpointMixin, DESKTOP } from '@/mixins/breakpoint';
import VideoPreview from '@/components/VideoPreview';

export default {
    name: 'VideoCarousel',
    mixins: [breakpointMixin],
    components: {
        Swiper,
        SwiperSlide,
        VideoPreview,
    },
    props: {
        posts: { type: Array, required: true },
        orientation: { type: String, default: 'Landscape' },
    },
    data: () => ({
        swiperOptions: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            shortSwipes: false,
            longSwipes: true,
            longSwipesRatio: 0.1,
            longSwipesMs: 100,
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
        swiperContainer: null,
        swiperSlides: [],
        DESKTOP,
    }),
    created() {
        // this.swiperOptions.breakpoints['640'].slidesPerView = this.orientation === 'Portrait' ? 5 : 4;
    },
    mounted() {
        this.posts.forEach(() =>
            this.videoPreviewData.push({
                initLoad: false,
                loaded: false,
                show: false,
                delayReveal: false,
            })
        );

        this.swiperContainer = this.$refs.swiper.$el;
        this.swiperSlides = this.$refs.swiper.$children;
    },

    methods: {
        handleMouseOver(index) {
            this.videoPreviewData[index].initLoad = true;
            this.videoPreviewData[index].show = true;
            this.videoPreviewData[index].delayReveal = false;
            this.handlePortraitVideos(true, this.orientation, index);
        },

        handleMouseLeave(index) {
            this.videoPreviewData[index].show = false;
            this.handlePortraitVideos(false);
        },

        previewReady(index) {
            this.videoPreviewData[index].loaded = true;
            this.videoPreviewData[index].delayReveal = true;
        },

        getFeaturedImage(post) {
            if (!post.acf.featured_image) return;
            return post.acf.featured_image.url;
        },

        handlePortraitVideos(onHover, orientation, index) {
            if (!onHover) {
                this.swiperContainer.style.transform = `translate3d(0, 0, 0)`;
                this.swiperContainer.classList.remove('video-carousel--hide-arrows');
            } else {
                if (orientation !== 'Portrait') return;
                if (index <= 1) return;

                const offset = 16;
                this.swiperContainer.style.transform = `translate3d(-${offset * index}%, 0, 0)`;
                this.swiperContainer.classList.add('video-carousel--hide-arrows');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.video-carousel {
    width: 100%;

    &-slide {
        $block: &;

        &__overlay {
            position: absolute;
            background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.5) 100%);
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

            .swiper-slide:hover & {
                opacity: 1;
            }
        }

        &__preview {
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

        &__thumbnail {
            max-width: 100%;
            height: auto;

            [data-orientation='Portrait'] & {
                height: 100%;
                object-fit: cover;
            }
        }

        &--preview-reveal[data-preview-loaded='true'] {
            #{$block}__preview {
                opacity: 1;
            }

            &[data-preview-delay-reveal='true'] {
                #{$block}__preview {
                    transition-delay: 0.5s;
                }
            }
        }
    }

    &--hide-arrows {
        .swiper-button-next,
        .swiper-button-prev {
            display: none;
        }
    }

    .swiper-container {
        width: 100%;
        height: 100%;
        overflow: visible;
        transition: transform 0.3s ease;

        .swiper-wrapper {
            padding: 20px 0;

            .swiper-slide {
                position: relative;
                transition: 250ms all;
                overflow: hidden;
                border-radius: 3px;

                @include breakpoint(desktop) {
                    &:hover {
                        z-index: 1;
                        cursor: pointer;
                    }
                }
            }
        }

        .swiper-button-prev:before,
        .swiper-button-next:before {
            border-color: $white;
            border-style: solid;
            border-width: 0.2em 0.2em 0 0;
            content: '';
            display: inline-block;
            transform: rotate(-135deg);
            vertical-align: top;
            width: 1.8em;
            height: 1.8em;
        }

        .swiper-button-prev {
            left: -50px;
        }

        .swiper-button-next {
            right: -50px;

            &:before {
                transform: rotate(45deg);
            }
        }
    }

    &[data-orientation='Portrait'] {
        .swiper-slide {
            height: 60vh;

            @include breakpoint(desktop) {
                height: calc(49vw * 9 / 16);

                &:hover {
                    width: 70vw !important;
                }
            }
        }
    }

    &[data-orientation='Landscape'] {
        @include breakpoint(desktop) {
            .swiper-slide {
                &:hover {
                    transform: scale(1.2);
                }
                &:first-child:hover {
                    margin: 0 40px;
                }
                &:last-child:hover {
                    margin: 0 -40px;
                }
            }
        }
    }
}
</style>
