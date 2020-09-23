<template>
  <div class="logform">
    <h2 class="modal__head">Авторизоваться</h2>
    <form class="modal__form" @submit.prevent="submitHandler">
      <label class="modal__label"><span>Почта или телефон *</span><input type="text" class="modal__input" name="login"></label> <!-- телефон походу уйдет -->
      <label class="modal__label"><span>Пароль *</span><input type="password" class="modal__input" name="password"></label>
      <div class="modal__box1">
        <Button type="submit" class="modal__btn logform__btn">Войти</Button>
      </div>
      <div class="modal__box2">
        <span class="modal__text">Войти через социальные сети:</span>
        <ul class="modal__list">
          <li class="modal__item"><a class="social-link social-link--ok social-link--mr15" href="https://ya.ru"></a></li>
          <li class="modal__item"><a class="social-link social-link--vk" href="https://ya.ru"></a></li>
        </ul>
      </div>
    </form>
    <button class="modal__link modal__link--mr" @click="openRegisterForm">Регистрация</button>
    <button class="modal__link" @click="openRestoreForm">Забыли пароль?</button>
  </div>
</template>

<script>
  // import Button from "@/components/Button.vue";
  
  export default {
    // components: {Button,},
    methods: {
      openRegisterForm() {
        this.$store.dispatch("openModal", {type: "RegisterForm",});
      },
      openRestoreForm() {
        this.$store.dispatch("openModal", {type: "RestoreForm",});
      },
      async submitHandler() {
        try {
          const response = await this.$store.dispatch("login", {
            "username": "kashpro",
            "password": "uiop0987",
          });
          console.log(response);
        } catch(err) {
          alert(err);
        }
      }
    },
  }
</script>

<style lang="scss">
  .logform {
    &__btn {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }
</style>