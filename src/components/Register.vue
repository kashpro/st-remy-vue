<template>
  <div class="register">
    <!-- <button class="btn register__btn" @click="openRegisterForm">Зарегистрироваться</button> -->
    <Button class="register__btn" @click.native="openRegisterForm">Зарегистрироваться</Button>
    <span class="register__text">Войти через социальные сети:</span>
    <ul class="register__list">
      <li class="register__item"><a href="" title="Войти через Одноклассники" class="social-link social-link--ok social-link--mr15">ok.ru</a></li>
      <li class="register__item"><a href="" title="Войти через Вконтакте" class="social-link social-link--vk">vk.vom</a></li>
    </ul>
  </div>
</template>

<script>
  import Button from "@/components/Button.vue";

  export default {
    components: {Button,},
    methods: {
      openRegisterForm() {
        this.$store.dispatch("openModal", {type: "RegisterForm",});
      }
    }
  }
</script>

<style lang="scss">
  .register {
    &__btn {
      margin-bottom: 20px;
    }
    &__text {
      text-align: center;
      display: block;
      width: 100%;
      margin-bottom: 20px;
    }
    &__list {
      display: flex;
      justify-content: center;
    }
  }
</style>