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
    &__container {
      display: flex;
    }
    &__logo {
      flex-shrink: 0;
      width: 350px;
    }
    &--abs {
      position: absolute;
    }
    &__nav {
      margin: 0 auto;
    }
    &__login {
      flex-shrink: 0;
    }
  }
  // .login {
  //   flex-shrink: 0;
  //   width: 350px;
  //   position: relative;
  //   display: flex;
  //   justify-content: flex-end;
  //   align-items: center;
  //   &__list {
  //     position: absolute;
  //   }
  //   &__name {
  //     cursor: pointer;
  //     color: #cbb073;
  //     transition: all 0.2s ease;
  //     &:hover {
  //       color: #ffffff;
  //     }
  //   }
  //   &__btn {
  //     flex-shrink: 0;
  //   }
  //   &__list {
  //     width: 200px;
  //     right: 0;
  //     bottom: -60px;
  //   }
  //   &__item {
  //     transition: all 0.2s ease;
  //     cursor: pointer;
  //     padding: 10px 30px;
  //     color: #cbb073;
  //     background-color: #363636;
  //     text-align: center;
  //     &:not(:last-child) {
  //       border-bottom: 1px solid #cbb073;
  //     }
  //     &:hover {
  //       color: #ffffff;
  //     }
  //   }
  // }
</style>