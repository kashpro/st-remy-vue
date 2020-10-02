<template>
  <div class="header-mob">
    <div class="container header-mob__container">
      <div class="header-mob__logo">
        <router-link to="/">
          <img src="@/assets/images/logo-01.png" alt="Logo" class="header-mob__image">
        </router-link>
      </div>
      <div class="header-mob__sandwich" @click="isMenuOpen = true">
        <div class="header-mob__line"></div>
        <div class="header-mob__line"></div>
        <div class="header-mob__line"></div>
      </div>
    </div>
    <div v-if="isMenuOpen" class="header-mob__menu">
      <div class="container header-mob__container2">
        <div class="header-mob__box1">
          <div class="header-mob__logo">
            <img src="@/assets/images/logo-01.png" alt="Logo" class="header-mob__image">
          </div>
          <div class="header-mob__close" @click="closeMenu"></div>
        </div>
        <nav class="header-mob__nav">
          <ul class="header-mob__list">
            <li class="header-mob__item"><router-link class="header-mob__link" active-class="header-mob__link--active" to="/" exact>Главная</router-link></li>
            <li class="header-mob__item"><a class="header-mob__link" :href="rulesFileLink" target="blank">Правила конкурса</a></li>
            <li class="header-mob__item"><router-link class="header-mob__link" active-class="header-mob__link--active" to="/gallery">Галерея</router-link></li>
            <li class="header-mob__item"><router-link class="header-mob__link" active-class="header-mob__link--active" to="/winners">Победители</router-link></li>
          </ul>
        </nav>
        <div class="header-mob__stripe"></div>
        <div class="header-mob__login">
          <div v-if="userInfo" class="header-mob__box2">
            <span class="header-mob__name">{{ fullName }}</span>
            <router-link class="header-mob__link2" active-class="header-mob__link2--active" to="/profile">Профиль</router-link>
            <a class="header-mob__link2" @click.prevent="logout">Выйти</a>
          </div>
          <Button v-else class="btn header-mob__btn" @click.native="openLoginForm">Войти</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import logout from "@/utils/logout.mixin.js";

  export default {
    name: "HeaderMobile",
    mixins: [logout],
    data() {
      return {
        isMenuOpen: false,
        rulesFileLink: CONFIG.RULES_FILE_LINK,
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
      fullName() {
        return `${this.userInfo.profile.first_name} ${this.userInfo.profile.surname}`;
      },
    },
    methods: {
      openLoginForm() {
        this.$store.dispatch("openModal", {type: "LoginForm",});
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
      closeMenuKeyboard(e) {
        if (e.code === "Escape" || e.keyCode === 27) { //e.keyCode - deprecated
          this.closeMenu();
        }
      },
    },
    watch: {
      isMenuOpen() {
        if (this.isMenuOpen) {
          window.addEventListener("keyup", this.closeMenuKeyboard);
          setTimeout(() => {document.addEventListener("click", this.closeMenu);}, 0); //this.$nextTick - не подходит
        } else {
          window.removeEventListener("keyup", this.closeMenuKeyboard);
          document.removeEventListener("click", this.closeMenu);
        }
      },
    },
  }
</script>

<style lang="scss">
  .header-mob {
    margin-top: 20px;
    height: 70px;
    display: none;
    position: relative;
    width: 100%;
    z-index: 20;
    @media (max-width: 1279px) {
      display: block;
    }
    &__container2 {
      height: 100%;
      overflow: auto;
    }
    &__box1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 50px;
      @media (max-width: 1279px) {
        margin-bottom: 0;
      }
    }
    &__close {
      // background-color: #109;
      width: 30px;
      height: 30px;
      position: relative;
      &::before, &::after {
        content: "";
        position: absolute;
        height: 4px;
        width: 100%;
        transform: translate(-50%, -50%) rotate(45deg);
        top: 50%;
        left: 50%;
        background-color: #ffffff;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
    &--abs {
      position: absolute;
    }
    &__container {
      display: flex;
      // background-color: #901;
      justify-content: space-between;
      align-items: center;
    }
    &__logo {
      img {
        width: 150px;
      }
    }
    &__sandwich {
      // background-color: #109;
      width: 36px;
      height: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__line {
      position: relative;
      width: 100%;
      height: 4px;
      background-color: #fff;
    }
    &__menu {
      position: fixed;
      top: 0;
      left: 0;
      background-color: #000000;
      width: 100vw;
      max-width: 100%;
      height: 100vh;
    }
    &__nav {
      margin-bottom: 30px;
      @media (max-width: 1279px) {
        margin-bottom: 15px;
      }
    }
    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__item {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
    &__link {
      color: #ffffff;
      cursor: pointer;
      &--active {
        color: #d8bd67;
      }
    }
    &__link2 {
      color: #ffffff;
      cursor: pointer;
      margin-bottom: 30px;
      &--active {
        color: #d8bd67;
      }
    }
    &__box2 {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__name {
      margin-bottom: 30px;
      font-family: "PT Serif", serif;
      font-size: 20px;
      font-weight: 700;
      color: #d8bd67;
    }
    &__stripe {
      background: url("../assets/images/stripe.png") center no-repeat;
      height: 20px;
      background-size: contain;
      margin-bottom: 30px;
      @media (max-width: 1279px) {
        margin-bottom: 15px;
      }
    }
    &__login {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
    }
  }
</style>