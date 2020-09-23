<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo">
        <router-link to="/">
          <img src="@/assets/images/logo-01.png" alt="Logo" class="header__image">
        </router-link>
      </div>
      <Nav class="header__nav"></Nav>
      <div class="login header__login">
        <a class="login__name hide" @click.prevent="isUserMenuOpen = !isUserMenuOpen">Пантелеймон Константинопольский</a>
        <ul v-if="isUserMenuOpen" class="login__list" ref="loginList">
          <li class="login__item" @click="closeUserMenu"><router-link tag="span" to="/profile">Профиль</router-link></li>
          <li class="login__item" @click="closeUserMenu"><span>Выйти</span></li>
        </ul>
        <Button class="login__btn" @click.native="openLoginForm">Войти</Button>
      </div>
    </div>
  </header>
</template>

<script>
  import Nav from "@/components/Nav.vue";
  // import Button from "@/components/Button.vue";

  export default {
    components: {Nav, /*Button*/},
    data() {
      return {
        isUserMenuOpen: false,
      };
    },
    methods: {
      openLoginForm() {
        this.$store.dispatch("openModal", {type: "LoginForm",});
        // this.$store.dispatch("openCommonModal", {type: "LoginForm",});
      },
      closeUserMenuKeyboard(e) {
        if (e.code === "Escape" || e.keyCode === 27) { //e.keyCode - deprecated
          this.closeUserMenu();
        }
      },
      closeUserMenu() {
        this.isUserMenuOpen = false;
      }
    },
    watch: {
      isUserMenuOpen() {
        if (this.isUserMenuOpen) {
          window.addEventListener("keyup", this.closeUserMenuKeyboard);
        } else {
          window.removeEventListener("keyup", this.closeUserMenuKeyboard);
        }
      },
    },
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
  }
  .login {
    flex-shrink: 0;
    width: 350px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &__list {
      position: absolute;
    }
    &__name {
      cursor: pointer;
      color: #cbb073;
      transition: all 0.2s ease;
      &:hover {
        color: #ffffff;
      }
    }
    &__btn {
      flex-shrink: 0;
    }
    &__list {
      width: 200px;
      right: 0;
      bottom: -60px;
    }
    &__item {
      transition: all 0.2s ease;
      cursor: pointer;
      padding: 10px 30px;
      color: #cbb073;
      background-color: #363636;
      text-align: center;
      &:not(:last-child) {
        border-bottom: 1px solid #cbb073;
      }
      &:hover {
        color: #ffffff;
      }
    }
  }
</style>