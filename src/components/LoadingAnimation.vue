<template>
  <TinyLogo class="v-logo" />
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
.v-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  animation: letter-animation 3s infinite;
  transition: fill 1s ease;

  .loaded & {
    fill: $white;
    animation-play-state: paused;
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

@keyframes loaded {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>