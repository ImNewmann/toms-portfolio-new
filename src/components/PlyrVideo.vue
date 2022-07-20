<template>
    <vue-plyr ref="plyr">
        <div class="plyr__video-embed">
            <iframe
                :src="
                    `https://player.vimeo.com/video/${videoID}?loop=false&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=0&amp;gesture=media`
                "
                allowfullscreen
                allowtransparency
                allow="autoplay"
            ></iframe>
        </div>
    </vue-plyr>
</template>

<script>
export default {
    name: 'Video',
    data() {
        return {
            videoID: '493789308',
        };
    },
    mounted() {
        console.log(this.$refs.plyr.player);
    },
    methods: {},
};
</script>

<style lang="scss">
:root {
    --plyr-color-main: #{$black};
    --plyr-video-control-background-hover: transparent;
    --plyr-font-family: #{$font-family-title};
}
</style>
