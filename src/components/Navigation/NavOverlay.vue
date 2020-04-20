<template>
  <transition name="nav-overlay">
    <div v-if="open" class="nav-overlay">
      <div class="nav-overlay__dropdown">
        <div class="nav-overlay__dropdown-label" @click="showNarrative = !showNarrative">
          Narrative
        </div>
        <div class="nav-overlay__dropdown-links">
          <ul>
            <li v-for="(post, index) in narrativePosts" :key="index" @click="linkClicked">
              <router-link :to="'/' + post.slug">
                {{ post.title.rendered }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-overlay__dropdown">
        <div class="nav-overlay__dropdown-label" @click="showPromo = !showPromo">
          Promo
        </div>
        <div class="nav-overlay__dropdown-links">
          <ul>
            <li v-for="(post, index) in promoPosts" :key="index" @click="linkClicked">
              <router-link :to="'/' + post.slug">
                {{ post.title.rendered }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-overlay__dropdown">
        <div class="nav-overlay__dropdown-label" @click="linkClicked">
          <router-link to="/about-me">
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
    narrativePosts: { type: Array, required: true },
    promoPosts: { type: Array, required: true },
  },
  methods: {
    linkClicked() {
      this.$emit('linkClicked', false);
    },
  },
}
</script>

<style lang="scss">
.nav-overlay {
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
  background-color: rgba(0, 0, 0, 0.9);
  transition: opacity .3s ease;

  &__dropdown {
    color: $white;
    padding: 25px 0;

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
      text-align: center;
    }

    a {
      transition: color 0.3s ease;

      &:hover {
        color: $pink;
      }
    }
  }
}

.nav-overlay-enter-active, .nav-overlay-leave-active {
  opacity: 0;
}
.nav-overlay-enter-active {
  transition-delay: 0.3s;
}
</style>