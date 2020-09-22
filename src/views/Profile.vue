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
          <ImageField text="Фотография №1 (тогда)" id="before" imagePath="img/stremy-01.jpg" selectName="before-year" :min="1920" :initial="1990"></ImageField>
          <ImageField text="Фотография №2 (сейчас)" id="after" imagePath="img/stremy-02.jpg" selectName="after-year" :min="1930" :initial="2000"></ImageField>
          <!-- <div class="editor__field">
            <p class="editor__label-text">Фотография №1 (тогда)</p>
            <input type="file" name="before" hidden id="before" accept=".jpg, .jpeg, .png, .gif, .svg">
            <label class="editor__label" for="before">
                <img src="@/assets/images/stremy-01.jpg" alt="before">
                <div class=" editor__icon"></div>
                <span class="editor__image-text">Загрузить фото</span>
            </label>
            <div class="editor__year">
              <span class="editor__select-text">Укажите год, когда сделана фотография</span>
              <Select :min="1920" :name="'before-year'"></Select>
            </div>
          </div> -->
          <!-- <div class="c3 editor__field">
            <p class="editor__label-text">Фотография №2 (сейчас)</p>
            <input type="file" name="after" hidden id="after" accept=".jpg, .jpeg, .png, .gif, .svg">
            <label class="editor__label" for="after">
                <img src="@/assets/images/stremy-02.jpg" alt="after">
                <div class="editor__icon"></div>
                <span class="editor__image-text">Загрузить фото</span>
            </label>
            <div class="editor__year">
              <span class="editor__select-text">Укажите год, когда сделана фотография</span>
              <select name="after-year" id="after-year"></select>
            </div>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageField from "@/components/ImageField.vue";

  export default {
    components: {ImageField,},
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
    &__field {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__label-text {
      // align-self: flex-start;
      margin-bottom: 20px;
    }
    &__label {
      position: relative;
      line-height: 0;
      width: 592px;
      height: 403px;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 15px;
      border: 6px solid #cbb073;
      &:hover {
        img {
          filter: brightness(1.2);
        }
        .editor__icon {
          filter: brightness(1.2);
        }
        .editor__image-text {
          opacity: 0.5;
        }
      }
      img {
        transition: all 0.2s ease;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__icon {
      transition: all 0.2s ease;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 30px;
      width: 30px;
      height: 33px;
      background: url("../assets/images/upload-icon.png") center no-repeat;
    }
    &__image-text {
      opacity: 1;
      transition: all 0.2s ease;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 100px;
      color: #000000;
    }
    &__select-text {
      margin-right: 15px;
    }
  }
</style>