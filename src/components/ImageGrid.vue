<template>
    <div class="image-grid"></div>
</template>

<script>
export default {
    name: 'ImageGrid',

    props: {
        images: { type: Array, required: true },
    },
};
</script>

<style lang="scss">
.image-grid {
}
</style>
