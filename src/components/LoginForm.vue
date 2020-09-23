<template>
  <div class="logform">
    <!-- <h2 class="modal__head">Авторизоваться</h2> -->
    <ModalHead class="logform__modal-head">Авторизоваться</ModalHead>
    <!-- <form class="modal__form" @submit.prevent="submitHandler"> -->
    <ModalForm class="logform__modal-form" @submit.native.prevent="sendLogin">
      <!-- <label class="modal__label"><span>Почта или телефон *</span><input type="text" class="modal__input" name="login"></label> телефон походу уйдет -->
      <!-- <label class="modal__label"><span>Пароль *</span><input type="password" class="modal__input" name="password"></label> -->
      <ModalInput class="logform__modal-input" text="Почта??? или телефон??? *" name="login" type="text"></ModalInput>
      <ModalInput class="logform__modal-input" text="Пароль *" name="password" type="password"></ModalInput>
      <div class="logform__box1">
        <Button type="submit" class="modal__btn logform__btn">Войти</Button>
      </div>
      <ModalSocial class="logform__modal-social"></ModalSocial>
      <!-- <div class="modal__box2">
        <span class="modal__text">Войти через социальные сети:</span>
        <ul class="modal__list">
          <li class="modal__item"><a class="social-link social-link--ok social-link--mr15" href="https://ya.ru"></a></li>
          <li class="modal__item"><a class="social-link social-link--vk" href="https://ya.ru"></a></li>
        </ul>
      </div> -->
    <!-- </form> -->
    </ModalForm>
    <!-- <button class="modal__link modal__link--mr" @click="openRegisterForm">Регистрация</button>
    <button class="modal__link" @click="openRestoreForm">Забыли пароль?</button> -->
    <ModalLink class="logform__modal-link" @click.native="openRegisterForm">Регистрация</ModalLink>
    <ModalLink class="logform__modal-link" @click.native="openRestoreForm">Забыли пароль?</ModalLink>
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
      async sendLogin() {
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
    &__modal-input {
      flex: 0 1 47%;
    }
    &__modal-head {
      margin-bottom: 30px;
    }
    &__modal-form {
      margin-bottom: 25px;
    }
    &__btn {
      margin: 0 auto;
      margin-bottom: 20px;
    }
    &__box1 {
      flex: 0 1 47%;
      display: flex;
      flex-direction: column;
    }
    &__modal-social {
      flex: 0 1 47%;
      margin-top: 15px;
    }
    &__modal-link {
      margin-right: 15px;
    }
  }
</style>