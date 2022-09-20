<template>
    <nav class="nav">
        <div class="nav__inner">
            <router-link to="/" class="nav__logo">
                <Logo />
            </router-link>
            <HamburgerIcon @iconClicked="handleMenu" :menu-open="showMenu" />
            <CloseIcon @iconClicked="handleMenu" :menu-open="showMenu" />
            <NavMenu
                v-if="posts.length"
                @linkClicked="handleMenu"
                :open="showMenu"
                :posts="posts"
                :categories="categories"
            />
        </div>
    </nav>
</template>

<script>
import HamburgerIcon from '@/components/Navigation/HamburgerIcon';
import CloseIcon from '@/components/Navigation/CloseIcon';
import NavMenu from '@/components/Navigation/NavMenu';
import Logo from '@/assets/svg/main-logo.svg';

export default {
    name: 'Navbar',
    props: {
        posts: { type: Array, required: true },
        categories: { type: Array, required: true },
    },
    components: {
        HamburgerIcon,
        CloseIcon,
        NavMenu,
        Logo,
    },
    data: () => ({
        showMenu: false,
    }),
    methods: {
        handleMenu(isOpen) {
            this.showMenu = isOpen;
        },
    },
};
</script>

<style lang="scss">
.nav {
    position: fixed;
    top: 0;
    padding: 20px;
    width: 100%;
    z-index: 1000;
    pointer-events: none;

    @include breakpoint(desktop) {
        padding: 50px;
    }

    &__inner {
        display: flex;
        width: 100%;
        margin: 0 auto;
        justify-content: space-between;
    }

    &__logo {
        pointer-events: all;
        max-width: 250px;

        svg {
            transition: fill 0.6s ease;
            fill: $white;
            .page & {
                fill: $black;
            }
        }
    }
}

.nav-enter {
    transform: translateY(-20px);
    opacity: 0;
}

.nav-enter-to {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.4s $bezierCurve;
}
</style>
