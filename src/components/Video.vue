<template>
    <div class="video" v-html="html"></div>
</template>

<script>
export default {
    name: 'Video',
    props: {
        html: { type: String, required: true },
    },
};
</script>

<style lang="scss">
.video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
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
