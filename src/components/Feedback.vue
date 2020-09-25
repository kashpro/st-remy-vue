<template>
  <section class="feedback">
    <div class="container feedback__container">
      <h2 class="feedback__head">Обратная связь</h2>
      <form class="feedback__form" @submit.prevent="sendFeedback">
        <div class="feedback__input-field">
          <input name="name" class="feedback__input" type="text" placeholder="Имя *" v-model="name">
          <small v-if="nameInvalid" class="feedback__small1">{{ nameInvalid }}</small>
        </div>
        <div class="feedback__input-field">
          <input name="email" class="feedback__input" type="email" placeholder="E-mail *" v-model="email">
          <small v-if="emailInvalid" class="feedback__small1">{{ emailInvalid }}</small>
        </div>
        <div class="feedback__box1">
          <textarea name="text" class="feedback__textarea" placeholder="Сообщение *" v-model="message"></textarea>
          <ThemeInput :name="'theme'" class="feedback__theme" v-model="theme"></ThemeInput>
          <small v-if="messageInvalid" class="feedback__small2">{{ messageInvalid }}</small>
          <small v-if="themeInvalid" class="feedback__small3">{{ themeInvalid }}</small>
        </div>
        <Button class="feedback__btn" type="submit">Отправить</Button>
    </form>
    </div>
  </section>
</template>

<script>
  import ThemeInput from "@/components/ThemeInput.vue";
  import {email, required} from "vuelidate/lib/validators";
  import {nameInvalid, emailInvalid, messageInvalid, themeInvalid} from "@/utils/validations.mixin.js";

  export default {
    mixins: [nameInvalid, emailInvalid, messageInvalid, themeInvalid],
    components: {ThemeInput},
    validations: {
      name: {required},
      email: {required, email},
      message: {required},
      theme: {required},
    },
    data() {
      return {
        name: "",
        email: "",
        message: "",
        theme: "",
      };
    },
    methods: {
      async sendFeedback() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        console.log("send feedback");
      },
    },
  }
</script>

<style lang="scss">
  .feedback {
    margin-bottom: 150px;
    &__head {
      font-size: 30px;
      font-weight: 700;
      font-family: "PT Serif", serif;
      margin-bottom: 50px;
      text-align: center;
    }
    &__form {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }
    &__input-field {
      position: relative;
      flex: 1 1 40%;
      margin-bottom: 30px;
      &:first-child {
        margin-right: 30px;
      }
    }
    &__small1 {
      position: absolute;
      color: #ff0000;
      bottom: -18px;
      left: 0;
    }
    &__small2 {
      position: absolute;
      color: #ff0000;
      left: 0;
      bottom: -18px;
    }
    &__small3 {
      position: absolute;
      color: #ff0000;
      right: 0;
      bottom: -18px;
    }
    &__input {
      width: 100%;
      padding: 20px 25px;
      border: none;
      border-radius: 5px;
      background-color: #cdb66b;
      color: #000000;
      &::placeholder {
        color: #ffffff;
      }
    }
    &__box1 {
      flex: 1 1 100%;
      position: relative;
    }
    &__textarea {
      width: 100%;
      resize: none;
      padding: 20px 25px 100px 25px;
      border: none;
      border-radius: 5px;
      background-color: #cdb66b;
      height: 300px;
      color: #000000;
      &::placeholder {
        color: #ffffff;
      }
    }
    &__theme {
      position: absolute;
      bottom: 0;
    }
    &__btn {
      margin: 0 auto;
      margin-top: 30px;
    }
  }
</style>