<template>
    <vimeo-player
        class="video"
        ref="player"
        :video-id="videoID"
        :controls="controls"
        :autoplay="autoplay"
    ></vimeo-player>
</template>

<script>
export default {
    name: 'VideoPreview',
    props: {
        controls: { type: Boolean, default: true },
        autoplay: { type: Boolean, default: false },
    },
    data: () => ({
        videoID: '493789308',
    }),

    watch: {
        play(val) {
            if (val) this.$refs.player.play();
            else this.$refs.player.pause();
        },
    },
};
</script>

<style lang="scss">
.video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    margin-bottom: 20px;
}
.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
