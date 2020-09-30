<template>
  <div class="profile">
    <div class="container profile__container">
      <h1 class="profile__head">Личный кабинет</h1>
      <p class="profile__text">Регистрируйся и принимай участие в конкурсе от St.Remy. Стань победителем, получи подарок для себя и своих друзей!</p>
      <p class="profile__name">{{ fullName }}</p>
      <div class="editor profile__editor">
        <h2 class="editor__head">Редактор истории</h2>
        <div class="editor__line"></div>
        <form class="editor__form">
          <ImageField class="editor__imagefield" text="Фотография №1 (тогда)" id="before" imagePath="img/stremy-01.jpg" :small="beforeImageInvalid"></ImageField>
          <ImageField class="editor__imagefield" text="Фотография №2 (сейчас)" id="after" imagePath="img/stremy-02.jpg" :small="afterImageInvalid"></ImageField>
          <div class="editor__description">
            <span class="editor__text" >История дружбы (описание):</span>
            <label for="description" class="editor__label">Напишите краткую историю о том, как вы сделали эти фотографии.</label>
            <textarea id="description" class="editor__textarea" v-model="desc" placeholder="Введите текст от 140 до 4000 символов:"></textarea>
            <small v-if="descInvalid" class="editor__small">{{ descInvalid }}</small>
          </div>
          <div class="editor__buttons">
            <Button class="editor__btn" type="submit" @click.native.prevent="sendHistory(false)">Отправить на модерацию</Button>
            <Button class="btn--secondary editor__btn" type="submit" @click.native.prevent="sendHistory(true)">Сохранить черновик</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageField from "@/components/ImageField.vue";
  import {required, minLength, maxLength} from "vuelidate/lib/validators";
  import {descInvalid, beforeImageInvalid, afterImageInvalid} from "@/utils/validations.mixin.js";
  import {mapGetters} from "vuex";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";
  import {sizeValidator} from "@/utils/validators.util.js";
  import MetaInfo from "@/utils/metaInfo.mixin.js";
  import axios from "axios";

  export default {
    name: "Profile",
    mixins: [descInvalid, beforeImageInvalid, afterImageInvalid, MetaInfo],
    components: {ImageField},
    validations: {
      desc: {required, minLength: minLength(CONFIG.STORY_DESC_MIN_LENGTH), maxLength:maxLength(CONFIG.STORY_DESC_MAX_LENGTH)},
      beforeImage: {required, sizeValidator},
      afterImage: {required, sizeValidator},
    },
    data() {
      return {
        desc: "",
      }
    },
    computed: {
      ...mapGetters(["userInfo", "beforeImage", "afterImage", "beforeYear", "afterYear"]),
      fullName() {
        if (this.userInfo) {
          return `${this.userInfo.profile.first_name} ${this.userInfo.profile.surname}`;
        }
      },
    },
    methods: {
      async sendHistory(draft) {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        try {
          const data = new FormData();
          data.append("desc", this.desc);
          data.append("draft", draft);
          data.append("images", this.beforeImage);
          data.append("images", this.afterImage);
          data.append("years", this.beforeYear);
          data.append("years", this.afterYear);

          const response = await this.$store.dispatch("sendHistory", data);
          this.$store.dispatch("setValue", {key: "beforeImage", value: null});
          this.$store.dispatch("setValue", {key: "afterImage", value: null});
          this.$store.dispatch("setValue", {key: "beforeYear", value: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE});
          this.$store.dispatch("setValue", {key: "afterYear", value: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE});
          this.desc = "";
          this.$v.$reset();
          const message = draft ? this.$messages.DRAFT_CREATED : this.$messages.HISTORY_CREATED;
          this.$store.dispatch("openAlert", {type: "success", text: message});
        } catch(err) {
          apiErrorHandler.call(this, err);
        }
      },
    },
    mounted() {
      let response = axios.get("https://st-remy.django.the-uweb.ru/api/v1/history/my/?limit=100&offset=0", {headers: {Authorization: `Token ${localStorage.getItem("token")}`}});
      console.log(response);
    }
  }
</script>

<style lang="scss">
  .profile {
    position: relative;
    z-index: 15;
    margin-top: 120px;
    margin-bottom: 320px;
    &__head {
      font-size: 36px;
      font-family: "PT Serif", serif;
      font-weight: 700;
      color: #cbb073;
      text-align: center;
      margin-bottom: 25px;
    }
    &__text {
      max-width: 580px;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 50px;
    }
    &__name {
      font-size: 30px;
      font-family: "PT Serif", serif;
      font-weight: 700;
      color: #cbb073;
      margin-bottom: 50px;
    }
  }
  .editor {
    &__head {
      font-family: "PT Serif", serif;
      font-weight: 700;
    }
    &__line {
      background: url("../assets/images/stripe.png") center no-repeat;
      height: 46px;
      background-size: contain;
    }
    &__form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__imagefield {
      flex: 1 1 50%;
      margin-bottom: 60px;
      position: relative;
      z-index: 10;
    }
    &__description {
      position: relative;
      flex: 0 1 1394px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 1719px) {
        flex: 0 1 1100px;
      }
    }
    &__text {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 20px;
    }
    &__label {
      margin-bottom: 20px;
    }
    &__small {
      position: absolute;
      color: #ff0000;
      left: 0;
      bottom: 55px;
    }
    &__textarea {
      width: 100%;
      resize: none;
      padding: 20px 25px;
      border: none;
      background-color: #ffffff;
      border-radius: 5px;
      height: 300px;
      color: #000000;
      margin-bottom: 75px;
      &::placeholder {
        color: rgba(#000000, 0.5);
      }
    }
    &__buttons {
      flex: 1 1 100%;
      display: flex;
      justify-content: center;
    }
    &__btn {
      &:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
</style>