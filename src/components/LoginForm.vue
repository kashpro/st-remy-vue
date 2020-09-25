<template>
  <div class="logform">
    <ModalHead class="logform__modal-head">Авторизоваться</ModalHead>
    <ModalForm class="logform__modal-form" @submit.native.prevent="sendLogin">
      <ModalInput class="logform__modal-input" text="E-mail *" type="email" v-model="email" :small="emailInvalid"></ModalInput>
      <ModalInput class="logform__modal-input" text="Пароль *" type="password" v-model="password" :small="passwordInvalid"></ModalInput>
      <div class="logform__box1">
        <Button type="submit" class="modal__btn logform__btn">Войти</Button>
      </div>
      <!-- <ModalSocial class="logform__modal-social"></ModalSocial> -->
    </ModalForm>
    <ModalLink class="logform__modal-link" @click.native="openRegisterForm">Регистрация</ModalLink>
    <ModalLink class="logform__modal-link" @click.native="openRestoreForm">Забыли пароль?</ModalLink>
  </div>
</template>

<script>
  import {email, required,} from "vuelidate/lib/validators";
  import {emailInvalid, passwordInvalidForLogin} from "@/utils/validations.mixin.js";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";

  export default {
    mixins: [emailInvalid, passwordInvalidForLogin],
    validations: {
      email: {required, email},
      password: {required},
    },
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      openRegisterForm() {
        this.$store.dispatch("openModal", {type: "RegisterForm",});
      },
      openRestoreForm() {
        this.$store.dispatch("openModal", {type: "RestoreForm",});
      },
      async sendLogin() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        try {
          const loginData = {
            email: this.email,
            password: this.password,
          };
          const loginResponse = await this.$store.dispatch("loginUser", loginData); //залогинились
          const response = await this.$store.dispatch("getUserInfo", loginResponse.data.auth_token); //получили юзер-инфо
          localStorage.setItem("token", loginResponse.data.auth_token); //сохранили токен
          this.$store.dispatch("setUserInfo", response.data); //сохранили юзер-инфо
          this.$store.dispatch("closeModal"); //закрыли модалку
          this.$router.push("/profile");  //редирект на профайл
        } catch(err) {
           apiErrorHandler.call(this, err);
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
      // margin-bottom: 20px;
    }
    &__box1 {
      // flex: 0 1 47%;
      flex: 0 1 100%;
      margin-top: 25px;
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