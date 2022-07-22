<template>
    <div class="grid">
        <div class="grid__image" v-for="(image, index) in images" :key="index">
            <img :src="image.image.url" :alt="image.image.alt" />
        </div>
    </div>
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
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &__image {
        flex: calc(50% - 10px);
    }
}
</style>
