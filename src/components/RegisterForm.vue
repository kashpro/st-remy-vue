<template>
  <div class="regform">
    <!-- <h2 class="modal__head">Зарегистрироваться</h2> -->
    <ModalHead class="regform__modal-head">Зарегистрироваться</ModalHead>
    <!-- <form class="modal__form" @submit.prevent="submitHandler"> -->
    <ModalForm class="regform__modal-form" @submit.native.prevent="sendRegister">
      <!-- <label class="modal__label"><span>Имя *</span><input type="text" class="modal__input" name="firstname"></label> -->
      <!-- <label class="modal__label"><span>Фамилия *</span><input type="text" class="modal__input" name="secondname"></label> -->
      <!-- <label class="modal__label"><span>E-mail *</span><input type="email" class="modal__input" name="email"></label> -->
      <!-- <label class="modal__label"><span>Телефон *</span><input type="phone" class="modal__input" name="phone"></label> -->
      <!-- <label class="modal__label"><span>Дата рождения *</span><input type="date" class="modal__input" name="birthday"></label> -->
      <!-- <label class="modal__label"><span>Пароль *</span><input type="password" class="modal__input" name="password"></label> -->
      <ModalInput class="regform__modal-input" text="Имя *" name="firstname" type="text"></ModalInput>
      <ModalInput class="regform__modal-input" text="Фамилия *" name="secondname" type="text"></ModalInput>
      <ModalInput class="regform__modal-input" text="E-mail *" name="email" type="email"></ModalInput>
      <ModalInput class="regform__modal-input" text="Телефон *" name="phone" type="phone"></ModalInput>
      <ModalInput class="regform__modal-input" text="Дата рождения *" name="birthday" type="date"></ModalInput>
      <ModalInput class="regform__modal-input" text="Пароль *" name="password" type="password"></ModalInput>
      <div class="regform__box1">
        <Button type="submit" class="regform__btn">Регистрация</Button>
        <input id="person" class="regform__check" name="person" type="checkbox" hidden>
        <label class="regform__check-label" for="person">«Согласен(на) на обработку персональных данных»</label>
        <input id="rules" class="regform__check" name="rules" type="checkbox" hidden>
        <label class="regform__check-label" for="rules">«С <ModalLink :href="rulesFileLink" target="blank">правилами</ModalLink> ознакомлен(а)»</label>
      </div>
      <ModalSocial class="regform__modal-social"></ModalSocial>
      <!-- <div class="modal__box2">
        <span class="modal__text">Войти через социальные сети:</span>
        <ul class="modal__list">
          <li class="modal__item"><SocialLink class="social-link--ok social-link--mr15" title="Одноклассники" href="https://ok.ru">Одноклассники</SocialLink></li>
          <li class="modal__item"><SocialLink class="social-link--vk" title="Вконтакте" href="https://vk.com">Вконтакте</SocialLink></li>
        </ul>
      </div> -->
    </ModalForm>
    <!-- </form> -->
    <ModalLink class="regform__modal-link" @click.native="openLoginForm">Войти</ModalLink>
    <ModalLink class="regform__modal-link" @click.native="openRestoreForm">Забыли пароль?</ModalLink>
    <!-- <button class="modal-link--mr" @click="openLoginForm">Войти</button> -->
    <!-- <button @click="openRestoreForm">Забыли пароль?</button> -->
  </div>
</template>

<script>
  // import Button from "@/components/Button.vue";
  export default {
    // components: {Button,},
    data() {
      return {
        rulesFileLink: CONFIG.RULES_FILE_LINK,
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
        // if (this.$v.$invalid) {
        //   this.$v.$touch();
        //   return;
        // }
        // try {
        //   const category = await this.$store.dispatch("createCategory", {
        //     title: this.title,
        //     limit: this.limit,
        //   });
        //   this.title = "";
        //   this.limit = 100;
        //   this.$v.$reset();
        //   this.$message("Категория создана");
        //   this.$emit("created", category);
        // } catch(err) {

        // }
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