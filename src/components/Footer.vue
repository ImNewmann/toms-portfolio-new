<template>
  <footer class="footer">
    <div class="footer__links">
      <a href="mailto:tom@tomnewman.eu">tom@tomnewman.eu</a>
      <span>/</span>
      <a href="tel:+447495718055">+447495718055</a>
      <span>/</span>
    </div>
    <div class="footer__links">
      <SocialLinks />
    </div>
  </footer>
</template>

<script>
import SocialLinks from '@/components/SocialLinks';

export default {
  name: 'Footer',
  components: {
    SocialLinks,
  },
}
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: $black;
  padding: 20px;
  text-align: center;
  color: $white;

  @include breakpoint(tablet) {
    flex-direction: row;
  }

  .page & {
    background-color: $white;
  }

  &__links {
    font-family: $font-family-content;
    color: $white;
    margin-bottom: 5px;

    @include breakpoint(tablet) {
      margin-bottom: 0;
    }

    .page & {
      color: $black;
    }

    a {
      transition: color 0.3s ease;

      &:hover {
        color: $pink;
      }
    }

    span {
      padding: 0 5px;
    }
  }
}
</style>