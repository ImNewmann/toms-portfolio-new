<template>
  <nav class="nav">
    <div class="nav__inner">
      <router-link to="/" class="nav__logo">
        <Logo />
      </router-link>
      <HamburgerIcon @iconClicked="handleMenu" :menu-open="showMenu" />
      <CloseIcon @iconClicked="handleMenu" :menu-open="showMenu" />
      <NavOverlay @linkClicked="handleMenu" :open="showMenu" :promo-posts="promoPosts" :narrative-posts="narrativePosts" />
    </div>
  </nav>
</template>

<script>
import HamburgerIcon from '@/components/Navigation/HamburgerIcon';
import CloseIcon from '@/components/Navigation/CloseIcon';
import NavOverlay from '@/components/Navigation/NavOverlay';
import Logo from '@/assets/svg/main-logo.svg';

export default {
  name: 'Navbar',
  props: {
    posts: { type: Array, required: true },
  },
  components: {
    HamburgerIcon,
    CloseIcon,
    NavOverlay,
    Logo,
  },
  data: () => ({
    promoPosts: [],
    narrativePosts: [],
    showMenu: false,
  }),
  created() {
    this.promoPosts = this.posts.filter(post => post.categories[0] === 2);
    this.narrativePosts = this.posts.filter(post => post.categories[0] === 3);
  },
  methods: {
    handleMenu(isOpen) {
      this.showMenu = isOpen;
    }
  },
}
</script>

<style lang="scss">
.nav {
  position: fixed;
  padding: 20px;
  width: 100%;
  z-index: 1000;

  @include breakpoint(desktop) {
    padding: 50px;
  }

  &__inner {
    display: flex;
    max-width: 1368px;
    margin: 0 auto;
    justify-content: space-between;
  }
  &__logo {
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

</style>