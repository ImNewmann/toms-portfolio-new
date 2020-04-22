<template>
  <footer class="footer">
    <a href="mailto:tom@tomnewman.eu">tom@tomnewman.eu</a>
    <span> / </span>
    <a href="tel:+447495718055">+447495718055</a>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: black;
  padding: 20px;
  text-align: center;
  font-family: $font-family-content;
  color: $white;

  .page & {
    background-color: $white;
    color: $black;
  }
  span {
    padding: 0 10px;
  }
}
</style>