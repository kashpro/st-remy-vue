<template>
  <section class="feedback">
    <div class="container feedback__container">
      <h2 class="feedback__head">Обратная связь</h2>
      <form class="feedback__form">
        <input name="name" class="feedback__input" type="text" placeholder="Имя *">
        <input name="email" class="feedback__input" type="email" placeholder="E-mail *">
        <div class="feedback__box1">
          <textarea name="text" class="feedback__textarea" placeholder="Сообщение *"></textarea>
          <ThemeInput :name="'theme'" class="feedback__theme"></ThemeInput>
        </div>
        
        <button type="submit" class="btn feedback__btn">Отправить</button>
    </form>
    </div>
  </section>
</template>

<script>
  import ThemeInput from "@/components/ThemeInput.vue";

  export default {
    components: {ThemeInput,},
  }
</script>

<style lang="scss">
  .feedback {
    margin-bottom: 150px;
    &__container {

    }
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
    &__input {
      flex: 1 1 40%;
      margin-bottom: 30px;
      padding: 20px 25px;
      border: none;
      border-radius: 5px;
      background-color: #cdb66b;
      color: #000000;
      &::placeholder {
        color: #ffffff;
      }
      &:first-child {
        margin-right: 30px;
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