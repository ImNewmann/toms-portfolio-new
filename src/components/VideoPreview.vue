<template>
    <vimeo-player
        :class="videoClasses"
        ref="player"
        :video-id="videoID"
        :controls="controls"
        :autoplay="autoplay"
        @ready="onReady"
    ></vimeo-player>
</template>

<script>
export default {
    name: 'Video',
    props: {
        controls: { type: Boolean, default: true },
        autoplay: { type: Boolean, default: false },
        play: { type: Boolean, default: false },
        pause: { type: Boolean, default: false },
        orientation: { type: String, default: 'Landscape' },
    },
    data: () => ({
        videoID: '493789308',
    }),

    computed: {
        videoClasses() {
            return ['video-preview', this.orientation === 'Portrait' ? 'video-preview--portrait' : ''];
        },
    },

    watch: {
        play(val) {
            if (val) this.$refs.player.play();
        },
        pause(val) {
            if (val) this.$refs.player.pause();
        },
    },

    methods: {
        onReady() {
            this.$emit('videoReady');
        },
    },
};
</script>

<style lang="scss">
.video-preview {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    &--portrait {
        position: absolute;
        padding: 0;
        top: 50%;
        left: 50%;
        width: 120vw;
        height: 100vh;
        transform: translate(-50%, -50%);
    }
}
.video-preview iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
