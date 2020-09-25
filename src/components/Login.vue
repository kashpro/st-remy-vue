<template>
  <div class="login">
    <a v-if="userInfo" class="login__name" @click.prevent="isUserMenuOpen = !isUserMenuOpen">Пантелеймон Константинопольский</a>
    <ul v-if="isUserMenuOpen" class="login__list" ref="loginList">
      <li class="login__item" @click="closeUserMenu"><router-link tag="span" to="/profile">Профиль</router-link></li>
      <li class="login__item" @click="logout"><span>Выйти</span></li>
    </ul>
    <Button v-if="!userInfo" class="login__btn" @click.native="openLoginForm">Войти</Button>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";

  export default {
    data() {
      return {
        isUserMenuOpen: false,
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
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
      },
      async logout() {
        this.closeUserMenu();
        try {
          const response = await this.$store.dispatch("logout", localStorage.getItem("token")); //разлогинились
          localStorage.removeItem("token"); //удаляем токен из локалстораджа
          this.$store.commit("clearUserInfo"); //удаляем юзер-инфо из склада
          if (this.$route.name === "Profile") { //если сидим в профиле - редирект на главную
            this.$router.push("/");
          } else { //иначе сообщение об успешном выходе
            this.$store.dispatch("openAlert", {type: "success", text: this.$messages.ALERT_LOGOUT_SUCCESS});
          }
        } catch(err) {
          apiErrorHandler.call(this, err);
        }
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