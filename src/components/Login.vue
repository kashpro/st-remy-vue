<template>
  <div class="login">
    <a class="login__name hide" @click.prevent="isUserMenuOpen = !isUserMenuOpen">Пантелеймон Константинопольский</a>
    <ul v-if="isUserMenuOpen" class="login__list" ref="loginList">
      <li class="login__item" @click="closeUserMenu"><router-link tag="span" to="/profile">Профиль</router-link></li>
      <li class="login__item" @click="closeUserMenu"><span>Выйти</span></li>
    </ul>
    <Button class="login__btn" @click.native="openLoginForm">Войти</Button>
  </div>
</template>

<script>
  export default {
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