<template>
  <div class="profile">
    <div class="container profile__container">
      <h1 class="profile__head">Личный кабинет</h1>
      <p class="profile__text">Регистрируйся и принимай участие в конкурсе от St.Remy. Стань победителем, получи подарок для себя и своих друзей!</p>
      <p class="profile__name">Константин Константинопольский</p>

      <div class="editor profile__editor">
        <h2 class="editor__head">Редактор истории</h2>
        <div class="editor__line"></div>
        <form class="editor__form">
          <ImageField class="editor__imagefield" text="Фотография №1 (тогда)" id="before" imagePath="img/stremy-01.jpg" selectName="before-year" :min="1920" :initial="1990"></ImageField>
          <ImageField class="editor__imagefield" text="Фотография №2 (сейчас)" id="after" imagePath="img/stremy-02.jpg" selectName="after-year" :min="1930" :initial="2000"></ImageField>
          <div class="editor__description">
            <span class="editor__text" >История дружбы (описание):</span>
            <label for="description" class="editor__label">Напишите краткую историю о том, как вы сделали эти фотографии.</label>
              <textarea name="desc" id="description" class="editor__textarea" placeholder="Введите текст от 140 до 4000 символов:"></textarea>
          </div>
          <div class="editor__buttons">
            <Button class="editor__btn" type="submit" @click.native.prevent="sendHistory">Отправить на модерацию</Button>
            <Button class="btn--secondary editor__btn" type="submit" @click.native.prevent="sendDraft">Сохранить черновик</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageField from "@/components/ImageField.vue";
  // import Button from "@/components/Button.vue";

  export default {
    components: {ImageField, /*Button,*/},
    methods: {
      sendHistory() {
        console.log("hist");
      },
      sendDraft() {
        console.log("draft");
      }
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
    }
    &__description {
      flex: 0 1 1394px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
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
    &__textarea {
      width: 100%;
      resize: none;
      padding: 20px 25px 100px 25px;
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