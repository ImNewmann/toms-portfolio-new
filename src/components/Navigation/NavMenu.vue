<template>
  <transition name="nav-menu">
    <div v-if="open" class="nav-menu">
      <div v-for="(category, index) in categories" :key="index" class="nav-menu__dropdown">
        <div class="nav-menu__dropdown-label">
          {{ category.name }}
        </div>
        <div class="nav-menu__dropdown-links">
          <ul>
            <li v-for="(post, index) in posts" :key="index" @click="linkClicked">
              <div v-if="post.categories[0] === category.id">
                <router-link :to="'/' + post.slug" v-html="post.title.rendered" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-menu__dropdown">
        <div class="nav-menu__dropdown-label" @click="linkClicked">
          <router-link to="/info">
            Info
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'NavOverlay',
  props: {
    open: { type: Boolean, default: false },
    posts: { type: Array, required: true },
    categories: { type: Array, required: true },
  },
  methods: {
    linkClicked() {
      this.$emit('linkClicked', false);
    },
  },
};
</script>

<style lang="scss">
.nav-menu {
  pointer-events: all;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.9);
  transition: opacity 0.3s ease;

  &__dropdown {
    color: $white;
    padding: 25px 0;
    text-align: center;

    &-label {
      cursor: pointer;
      font-family: $font-family-title;
      font-size: 30px;
      margin-bottom: 10px;
    }

    li {
      font-family: $font-family-content;
      font-size: 18px;
      margin-bottom: 5px;
    }

    a {
      transition: color 0.3s ease;

      &:hover {
        color: $pink;
      }
    }
  }
}

.nav-menu-enter-active,
.nav-menu-leave-active {
  opacity: 0;
}
.nav-menu-enter-active {
  transition-delay: 0.3s;
}
</style>
