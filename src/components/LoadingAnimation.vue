<template>
  <div class="loading">
    <TinyLogo class="loading__logo" />
  </div>
  
</template>

<script>
import TinyLogo from '@/assets/svg/tiny-logo.svg';

export default {
  components: {    
    TinyLogo,
  }
}
</script>

<style lang="scss">
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100px;

  &__logo {
    animation: letter-animation 3s infinite;
    transition: fill 0.4s ease;

    .loaded & {
      fill: $white;
      animation-play-state: paused;
    }
  }
}

@keyframes letter-animation {
  0% {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
  100% {
    opacity: 0.9;
    transform: translate(-50%, -50%) scale(1);
  }
}

.loading-enter {
  opacity: 0;
}
.loading-enter-to {
  opacity: 1;
  transition: opacity 0.4s ease;
}
.loading-leave-active {
  opacity: 0;
  transition: opacity 0.4s ease;
}
</style>