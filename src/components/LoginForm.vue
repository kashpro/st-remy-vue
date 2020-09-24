<template>
  <div class="logform">
    <ModalHead class="logform__modal-head">Авторизоваться</ModalHead>
    <ModalForm class="logform__modal-form" @submit.native.prevent="sendLogin">
      <ModalInput class="logform__modal-input" text="E-mail *" name="email" type="email" v-model="email" :small="emailInvalid"></ModalInput>
      <ModalInput class="logform__modal-input" text="Пароль *" name="password" type="password" v-model="password" :small="passwordInvalid"></ModalInput>
      <div class="logform__box1">
        <Button type="submit" class="modal__btn logform__btn">Войти</Button>
      </div>
      <ModalSocial class="logform__modal-social"></ModalSocial>
    </ModalForm>
    <ModalLink class="logform__modal-link" @click.native="openRegisterForm">Регистрация</ModalLink>
    <ModalLink class="logform__modal-link" @click.native="openRestoreForm">Забыли пароль?</ModalLink>
  </div>
</template>

<script>
  import {email, required,} from "vuelidate/lib/validators";
  import {emailInvalid, passwordInvalidForLogin} from "@/utils/validations.mixin.js";

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
    // computed: {
      // emailInvalid() {
      //   if (this.$v.email.$dirty && !this.$v.email.required) {return this.$messages.FORM_EMAIL_FIELD_REQUIRED;} 
      //   if (this.$v.email.$dirty && !this.$v.email.email) {return this.$messages.FORM_EMAIL_FIELD_INCORRECT;} 
      //   return false;
      // },
      // passwordInvalid() {
      //   if (this.$v.password.$dirty && !this.$v.password.required) {return this.$messages.FORM_PASSWORD_FIELD_REQUIRED;} 
      //   return false;
      // },
    // },
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