<template>
    <vimeo-player
        :class="videoClasses"
        ref="player"
        :options="options"
        :video-url="videoID"
        :controls="controls"
        :autoplay="autoplay"
        @ready="onReady"
        loop
    ></vimeo-player>
</template>

<script>
export default {
    name: 'Video',
    props: {
        post: { type: Object, default: () => {} },
        controls: { type: Boolean, default: true },
        autoplay: { type: Boolean, default: false },
        play: { type: Boolean, default: false },
        orientation: { type: String, default: 'Landscape' },
    },
    data() {
        return {
            options: {
                muted: true,
            },
        };
    },

    computed: {
        videoClasses() {
            return ['video-preview', this.orientation === 'Portrait' ? 'video-preview--portrait' : ''];
        },
        videoID() {
            if (!this.post.acf.preview_video_link) return '493789308';

            return this.getVimeoIdFromUrl(this.post.acf.preview_video_link);
        },
    },

    watch: {
        play(val) {
            if (val) {
                this.$refs.player.play();
                this.$refs.player.unmute();
                console.log('play');
            } else {
                this.$refs.player.pause();
                this.$refs.player.mute();
                console.log('pause');
            }
        },
    },

    methods: {
        onReady() {
            this.$emit('videoReady');
        },
        getVimeoIdFromUrl(url) {
            // // Look for a string with 'vimeo', then whatever, then a
            // // forward slash and a group of digits.
            // const match = /vimeo.*\/(\d+)/i.exec(url);
            // // If the match isn't null (i.e. it matched)
            // if (match) {
            //     // The grouped/matched digits from the regex
            //     return match[1];
            // }
            const doc = new DOMParser().parseFromString(url, 'text/html');
            return doc.body.children[0].src;
        },
    },
};
</script>

<style lang="scss">
.video-preview {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    top: 50%;
    transform: translateY(-50%);

    &--portrait {
        position: absolute;
        padding: 0;
        top: 50%;
        left: 50%;
        height: calc(70vw * 9 / 16);
        width: 70vw;
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
