<template>
    <transition name="icon" appear>
        <div v-if="!menuOpen" class="hamburger-icon" @click="iconClicked">
            <span class="hamburger-icon__line"></span>
            <span class="hamburger-icon__line"></span>
            <span class="hamburger-icon__line"></span>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'HamburgerIcon',
    props: {
        menuOpen: { type: Boolean, default: false },
    },
    methods: {
        iconClicked() {
            this.$emit('iconClicked', true);
        },
    },
};
</script>

<style lang="scss">
.hamburger-icon {
    $block: &;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    flex-direction: column;
    height: 50px;
    width: 50px;
    z-index: 10;

    &:not(.icon-leave-active):hover &__line {
        &:nth-child(1) {
            transform: rotate(-40deg) scaleX(0.5) translateX(-25px) translateY(10px);
        }

        &:nth-child(3) {
            transform: rotate(-40deg) scaleX(0.4) translateX(-10px) translateY(10px);
        }
    }

    &__line {
        height: 2px;
        width: 100%;
        margin-bottom: 14px;
        background-color: $white;
        transition: all 0.3s $bezierCurve;
        will-change: transform;

        .page & {
            background-color: $black;
        }

        &:nth-child(1) {
            transform: rotate(-40deg) scaleX(0.6) translateX(-25px) translateY(10px);
        }

        &:nth-child(2) {
            transform: rotate(-40deg) scaleX(1) translateX(-10px) translateY(10px);
        }

        &:nth-child(3) {
            transform: rotate(-40deg) scaleX(0.5) translateX(-5px) translateY(10px);
        }
    }
}

.icon-enter {
    opacity: 0.999;
    transition: opacity 0.6s 0.3s ease;

    .hamburger-icon__line {
        &:nth-child(1) {
            transition-delay: 0;
            transform: rotate(-40deg) scaleX(0) translateX(-25px) translateY(10px);
        }
        &:nth-child(2) {
            transition-delay: 0.15s;
            transform: rotate(-40deg) scaleX(0) translateX(-10px) translateY(10px);
        }
        &:nth-child(3) {
            transition-delay: 0.3s;
            transform: rotate(-40deg) scaleX(0) translateX(-5px) translateY(10px);
        }
    }
}

.icon-leave-active {
    opacity: 0.999;
    transition: opacity 0.6s ease;

    .hamburger-icon__line {
        &:nth-child(1) {
            transition-delay: 0;
            transform: rotate(-40deg) scaleX(0) translateX(-25px) translateY(10px);
        }
        &:nth-child(2) {
            transition-delay: 0.15s;
            transform: rotate(-40deg) scaleX(0) translateX(-10px) translateY(10px);
        }
        &:nth-child(3) {
            transition-delay: 0.3s;
            transform: rotate(-40deg) scaleX(0) translateX(-5px) translateY(10px);
        }
    }
}
</style>
