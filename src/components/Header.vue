<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/images/logo-01.png" alt="Logo" class="header__image">
        </router-link>
      </div>
      <Nav class="header__nav"></Nav>
      <Login class="header__login"></Login>
    </div>
  </header>
</template>

<script>
  import Nav from "@/components/Nav.vue";
  import Login from "@/components/Login.vue";
  
  export default {
    name: "Header",
    components: {Nav, Login},
  }
</script>

<style lang="scss">
  .header {
    position: relative;
    margin-top: 30px;
    height: 80px;
    width: 100%;
    z-index: 10;
    @media (max-width: 1279px) {
      display: none;
    }
    &__container {
      display: flex;
    }
    &__logo {
      flex-shrink: 0;
      width: 350px;
      @media (max-width: 1719px) {
        width: 320px;
      }
    }
    &--abs {
      position: absolute;
    }
    &__nav {
      margin: 0 auto;
    }
    &__login {
      flex-shrink: 0;
      @media (max-width: 1719px) {
        width: 320px;
      }
    }
  }
</style>