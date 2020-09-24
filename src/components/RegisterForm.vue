<template>
  <div class="regform">
    <ModalHead class="regform__modal-head">Зарегистрироваться</ModalHead>
    <ModalForm class="regform__modal-form" @submit.native.prevent="sendRegister">
      <ModalInput class="regform__modal-input" text="Имя *" name="firstname" type="text" v-model="firstname" :small="firstnameInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Фамилия *" name="secondname" type="text" v-model="secondname" :small="secondnameInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="E-mail *" name="email" type="email" v-model="email" :small="emailInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Телефон *" name="phone" type="phone" v-model="phone" :small="phoneInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Дата рождения *" name="birthday" type="date" v-model="birth" :small="birthInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Пароль *" name="password" type="password" v-model="password" :small="passwordInvalid"></ModalInput>
      <div class="regform__box1">
        <Button type="submit" class="regform__btn">Регистрация</Button>
        <input id="person" class="regform__check" :class="{'regform__check--invalid': $v.isPersonalChecked.$dirty && !$v.isPersonalChecked.booleanValidator}" name="person" type="checkbox" v-model="isPersonalChecked" hidden>
        <label class="regform__check-label" for="person">«Согласен(на) на обработку персональных данных»</label>
        <input id="rules" class="regform__check" :class="{'regform__check--invalid': $v.isRulesChecked.$dirty && !$v.isRulesChecked.booleanValidator}" name="rules" type="checkbox" v-model="isRulesChecked" hidden>
        <label class="regform__check-label" for="rules">«С <ModalLink :href="rulesFileLink" target="blank">правилами</ModalLink> ознакомлен(а)»</label>
      </div>
      <ModalSocial class="regform__modal-social"></ModalSocial>
    </ModalForm>
    <ModalLink class="regform__modal-link" @click.native="openLoginForm">Войти</ModalLink>
    <ModalLink class="regform__modal-link" @click.native="openRestoreForm">Забыли пароль?</ModalLink>
  </div>
</template>

<script>
  import {email, required, minLength} from "vuelidate/lib/validators";
  import {phoneValidator, birthValidator, booleanValidator} from "@/utils/validators.util.js";
  import {firstnameInvalid, secondnameInvalid, emailInvalid, passwordInvalid, phoneInvalid, birthInvalid} from "@/utils/validations.mixin.js";

export default {
    mixins: [firstnameInvalid, secondnameInvalid, emailInvalid, passwordInvalid, phoneInvalid, birthInvalid],
    validations: {
      firstname: {required},
      secondname: {required},
      email: {required, email},
      phone: {required, phoneValidator},
      birth: {required, birthValidator},
      password: {required, minLength: minLength(CONFIG.PASSWORD_MIN_LENGTH),},
      isPersonalChecked: {booleanValidator},
      isRulesChecked: {booleanValidator},
    },
    computed: {
      requestData() {
        return null;
      },
      // firstnameInvalid() {
      //   if (this.$v.firstname.$dirty && !this.$v.firstname.required) {return this.$messages.FORM_FIRSTNAME_FIELD_REQUIRED;}
      //   return false;
      // },
      // secondnameInvalid() {
      //   if (this.$v.secondname.$dirty && !this.$v.secondname.required) {return this.$messages.FORM_SECONDNAME_FIELD_REQUIRED;} 
      //   return false;
      // },
      // emailInvalid() {
      //   if (this.$v.email.$dirty && !this.$v.email.required) {return this.$messages.FORM_EMAIL_FIELD_REQUIRED;} 
      //   if (this.$v.email.$dirty && !this.$v.email.email) {return this.$messages.FORM_EMAIL_FIELD_INCORRECT;} 
      //   return false;
      // },
      // passwordInvalid() {
      //   if (this.$v.password.$dirty && !this.$v.password.required) {return this.$messages.FORM_PASSWORD_FIELD_REQUIRED;} 
      //   if (this.$v.password.$dirty && !this.$v.password.minLength) {return this.$messages.FORM_PASSWORD_FIELD_SHORT.first + this.$v.password.$params.minLength.min + this.$messages.FORM_PASSWORD_FIELD_SHORT.second;} 
      //   return false;
      // },
      // phoneInvalid() {
      //   if (this.$v.phone.$dirty && !this.$v.phone.required) {return this.$messages.FORM_PHONE_FIELD_REQUIRED;}
      //   if (this.$v.phone.$dirty && !this.$v.phone.phoneValidator) {return this.$messages.FORM_PHONE_FIELD_INCORRECT;} 
      //   return false;
      // },
      // birthInvalid() {
      //   if (this.$v.birth.$dirty && !this.$v.birth.required) {return this.$messages.FORM_BIRTH_FIELD_REQUIRED;}
      //   if (this.$v.birth.$dirty && !this.$v.birth.birthValidator) {return this.$messages.FORM_BIRTH_FIELD_INCORRECT;} 
      //   return false;
      // },
    },
    data() {
      return {
        rulesFileLink: CONFIG.RULES_FILE_LINK,
        firstname: "",
        secondname: "",
        email: "",
        password: "",
        phone: "",
        birth: "",
        isPersonalChecked: false,
        isRulesChecked: false,
        // birth: "1920-01-01", //дата не проставляется на старте
      };
    }, 
    methods: {
      openLoginForm() {
        this.$store.dispatch("openModal", {type: "LoginForm",});
      },
      openRestoreForm() {
        this.$store.dispatch("openModal", {type: "RestoreForm",});
      },
      async sendRegister() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        console.log("register");
        return;
        try {
          const response = await this.$store.dispatch("registerNewUSer", {
            "email": "dk83@mail.ru",
            "username": "kashpro",
            "password": "uiop0987",
            "profile": {
              "first_name": "Kash",
              "surname": "Pro",
              "phone": "9991234567",
              "birth_date": "1990-01-01",
            },
          });
          console.log(response);
        } catch(err) {
          alert(err);
        }
      },
    },
  }
</script>

<style lang="scss">
  .regform {
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
    &__check-label {
      margin-bottom: 10px;
      line-height: 1;
      position: relative;
      margin-left: 24px;
      font-size: 14px;
      color: #959595;
      &::before{
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        position: absolute;
        left: -24px;
        top: 0px;
        border: 1px solid rgba(#ffffff, 0.5);
      }
      &::after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        left: -20px;
        top: 4px;
        background-color: #ffffff;
        transition: all 0.2s ease; 
        opacity: 0;
      }
    }
    &__check {
      cursor: pointer;
      &:checked + .regform__check-label::after{
        opacity: 1;
      }
      &--invalid {
        + .regform__check-label::before {
          border: 1px solid #ff0000;
        }
      }
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