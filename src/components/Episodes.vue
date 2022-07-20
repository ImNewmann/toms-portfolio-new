<template>
    <div class="episodes">
        <h2>Episodes</h2>

        <div v-for="(video, index) in videos" :key="index">
            <span>{{ index + 1 }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Episodes',
    props: {
        videos: {
            type: Array,
            required: true,
        },
    },

    created() {
        console.log(this.videos);
    },
};
</script>

<style lang="scss">
.episodes {
    font-family: $font-family-title;
    color: $white;
}
</style>
