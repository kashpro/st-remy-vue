<template>
  <div class="regform">
    <ModalHead class="regform__modal-head">Зарегистрироваться</ModalHead>
    <ModalForm class="regform__modal-form" @submit.native.prevent="sendRegister">
      <ModalInput class="regform__modal-input" text="Имя *" type="text" v-model="firstname" :small="firstnameInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Фамилия *" type="text" v-model="secondname" :small="secondnameInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="E-mail *" type="email" v-model="email" :small="emailInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Телефон *" type="phone" v-model="phone" :small="phoneInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Дата рождения *" type="date" v-model="birth" :small="birthInvalid"></ModalInput>
      <ModalInput class="regform__modal-input" text="Пароль *" type="password" v-model="password" :small="passwordInvalid"></ModalInput>
      <div class="regform__box1">
        <input id="person" class="regform__check" :class="{'regform__check--invalid': $v.isPersonalChecked.$dirty && !$v.isPersonalChecked.booleanValidator}" type="checkbox" v-model="isPersonalChecked" hidden>
        <label class="regform__check-label" for="person">«Согласен(на) на обработку персональных данных»</label>
        <input id="rules" class="regform__check" :class="{'regform__check--invalid': $v.isRulesChecked.$dirty && !$v.isRulesChecked.booleanValidator}" type="checkbox" v-model="isRulesChecked" hidden>
        <label class="regform__check-label" for="rules">«С <ModalLink :href="rulesFileLink" target="blank">правилами</ModalLink> ознакомлен(а)»</label>
         <Button type="submit" class="regform__btn">Регистрация</Button>
      </div>
      <!-- <ModalSocial class="regform__modal-social"></ModalSocial> -->
    </ModalForm>
    <ModalLink class="regform__modal-link" @click.native="openLoginForm">Войти</ModalLink>
    <ModalLink class="regform__modal-link" @click.native="openRestoreForm">Забыли пароль?</ModalLink>
  </div>
</template>

<script>
  import {email, required, minLength} from "vuelidate/lib/validators";
  import {phoneValidator, birthValidator, booleanValidator} from "@/utils/validators.util.js";
  import {firstnameInvalid, secondnameInvalid, emailInvalid, passwordInvalid, phoneInvalid, birthInvalid} from "@/utils/validations.mixin.js";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";

  export default {
    name: "RegisterForm",
    mixins: [firstnameInvalid, secondnameInvalid, emailInvalid, passwordInvalid, phoneInvalid, birthInvalid],
    validations: {
      firstname: {required},
      secondname: {required},
      email: {required, email},
      phone: {required, phoneValidator},
      birth: {required, birthValidator},
      password: {required, minLength: minLength(CONFIG.PASSWORD_MIN_LENGTH)},
      isPersonalChecked: {booleanValidator},
      isRulesChecked: {booleanValidator},
    },
    computed: {
      requestData() {
        return null;
      },
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
        try {
          const regData = {
            email: this.email,
            username: this.email,
            password: this.password,
            profile: {
              first_name: this.firstname,
              surname: this.secondname,
              phone: this.phone,
              birth_date: this.birth,
            },
          };
          const loginData = {
            email: this.email,
            password: this.password,
          };
          const registerResponse = await this.$store.dispatch("registerUser", regData);//зарегали юзера
          const loginResponse = await this.$store.dispatch("loginUser", loginData);//залогинились
          localStorage.setItem("token", loginResponse.data.auth_token); //сохранили токен   
          this.$store.dispatch("setUserInfo", registerResponse.data); //сохранили юзер-инфо
          this.$store.dispatch("closeModal");//закрыли модалку
          this.$router.push("/profile"); //редирект на профайл
        } catch(err) {
          apiErrorHandler.call(this, err);
        }
      },
    },
  }
</script>

<style lang="scss">
  .regform {
    &__modal-input {
      flex: 0 1 47%;
      @media (max-width: 575px) {
        flex: 0 1 100%;
      }
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
      margin-top: 25px;
    }
    &__box1 {
      // flex: 0 1 47%;
      flex: 0 1 100%;
      // margin-top: 25px;
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
    // &__modal-social {
    //   flex: 0 1 47%;
    //   margin-top: 15px;
    // }
    &__modal-link {
      margin-right: 15px;
    }
  }
</style>