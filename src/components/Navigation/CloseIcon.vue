<template>
  <transition name="close-icon" appear>
    <div v-if="menuOpen" class="close-icon" @click="iconClicked">
      <span class="close-icon__line"></span>
      <span class="close-icon__line"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CloseIcon',
  props: {
    menuOpen: { type: Boolean, default: false },
  },
  methods: {
    iconClicked() {
      this.$emit('iconClicked', false);
    },
  },
}
</script>

<style lang="scss">
.close-icon {
  $block: &;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 50px;
  z-index: 10;

  &__line {
    height: 3px;
    width: 100%;
    margin-bottom: 15px;
    background-color: white;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

    &:nth-child(1) {
      transform-origin: right;;
      transform: rotate(-45deg) scaleX(1) translateX(-8px) translateY(0px);
    }

    &:nth-child(2) {
      transform-origin: left;
      transition-delay: 0.3s;
      transform: rotate(45deg) scaleX(1) translateX(-3px) translateY(-14px);    
    }
  }
}

.close-icon-enter-active {
  position: absolute;
  opacity: 0.999;
  transition: opacity 0.6s 0.3s ease;

  .close-icon__line {
    &:nth-child(1) {
      transform: rotate(-45deg) scaleX(0) translateX(-8px) translateY(0px);
    }
    &:nth-child(2) {
      transform: rotate(45deg) scaleX(0) translateX(-3px) translateY(-14px);    
    }
  }
}

// .close-icon-enter-active {
//   opacity: 0.999;
//   transition: opacity 0.6s 1s ease;

//   .close-icon__line {
//     &:nth-child(1) {
//       transform: rotate(-45deg) scaleX(1) translateX(-15px) translateY(20px);
//     }
//     &:nth-child(2) {
//       transform: rotate(45deg) scaleX(1) translateX(7px) translateY(2px);
//     }
//   }
// }

// .icon-leave-active {
//   opacity: 0.999;
//   transition: opacity 0.6s ease;

//   .hamburger-icon__line {
//     &:nth-child(1) {
//       transition-delay: 0;
//       transform: rotate(-40deg) scaleX(0) translateX(-25px) translateY(10px);
//     }
//     &:nth-child(2) {
//       transition-delay: 0.15s;
//       transform: rotate(-40deg) scaleX(0) translateX(-10px) translateY(10px);
//     }
//     &:nth-child(3) {
//       transition-delay: 0.3s;
//       transform: rotate(-40deg) scaleX(0) translateX(-5px) translateY(10px);
//     }
//   }
// }
</style>