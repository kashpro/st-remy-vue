<template>
  <div class="regform">
    <h2 class="modal__head">Зарегистрироваться</h2>
    <form class="modal__form">
      <label class="modal__label"><span>Имя *</span><input type="text" class="modal__input" name="firstname"></label>
      <label class="modal__label"><span>Фамилия *</span><input type="text" class="modal__input" name="secondname"></label>
      <label class="modal__label"><span>E-mail *</span><input type="email" class="modal__input" name="email"></label>
      <label class="modal__label"><span>Телефон *</span><input type="phone" class="modal__input" name="phone"></label>
      <label class="modal__label"><span>Дата рождения *</span><input type="date" class="modal__input" name="birthday"></label>
      <label class="modal__label"><span>Пароль *</span><input type="password" class="modal__input" name="password"></label>
      <div class="modal__box1">
        <button type="submit" class="btn modal__btn regform__btn" @click.prevent="submitHandler">Регистрация</button>
        
        <input id="person" class="modal__check" name="person" type="checkbox" hidden>
        <label class="modal__check-label" for="person">«Согласен(на) на обработку персональных данных»</label>
        <input id="rules" class="modal__check" name="rules" type="checkbox" hidden>
        <label class="modal__check-label" for="rules">«С <a class="modal__link" :href="rulesFileLink" target="blank">правилами</a> ознакомлен(а)»</label>
        
      </div>
      <div class="modal__box2">
        <span class="modal__text">Войти через социальные сети:</span>
        <ul class="modal__list">
          <li class="modal__item"><a class="social-link social-link--ok social-link--mr15" href="https://ya.ru"></a></li>
          <li class="modal__item"><a class="social-link social-link--vk" href="https://ya.ru"></a></li>
        </ul>
      </div>
    </form>
    <button class="modal__link modal__link--mr" @click="loginBtnClickHandler">Войти</button>
    <button class="modal__link" @click="restoreBtnClickHandler">Забыли пароль?</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rulesFileLink: CONFIG.RULES_FILE_LINK,
      };
    }, 
    methods: {
      loginBtnClickHandler() {
        this.$store.dispatch("openCommonModal", {type: "LoginForm",});
      },
      restoreBtnClickHandler() {
        this.$store.dispatch("openCommonModal", {type: "RestoreForm",});
      },
      async submitHandler() {
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
    &__btn {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }
</style>