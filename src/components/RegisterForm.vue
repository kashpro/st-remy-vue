<template>
  <div class="regform">
    <h2 class="modal__head">Зарегистрироваться</h2>
    <form class="modal__form"  @submit.prevent="submitHandler">
      <label class="modal__label"><span>Имя *</span><input type="text" class="modal__input" name="firstname"></label>
      <label class="modal__label"><span>Фамилия *</span><input type="text" class="modal__input" name="secondname"></label>
      <label class="modal__label"><span>E-mail *</span><input type="email" class="modal__input" name="email"></label>
      <label class="modal__label"><span>Телефон *</span><input type="phone" class="modal__input" name="phone"></label>
      <label class="modal__label"><span>Дата рождения *</span><input type="date" class="modal__input" name="birthday"></label>
      <label class="modal__label"><span>Пароль *</span><input type="password" class="modal__input" name="password"></label>
      <div class="modal__box1">
        <Button type="submit" class="modal__btn regform__btn">Регистрация</Button>
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
    <button class="modal__link modal__link--mr" @click="openLoginForm">Войти</button>
    <button class="modal__link" @click="openRestoreForm">Забыли пароль?</button>
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