<template>
  <div class="notfound">
    <div class="container notfound__container">
      <div class="notfound__box">
        <h1 class="notfound__head">Страница не найдена</h1>
        <Button class="btn notfound__btn" @click.native="goBack">Вернуться назад</Button>
      </div>
      <div class="notfound__image"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "404",
    methods: {
      goBack() {
        this.$router.go(-1);
      },
    },
  }
</script>

<style lang="scss">
  .notfound {
    height: 100vh;
    &__container {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    &__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 100px;
    }
    &__image {
      background: url("../assets/images/glass.png") center no-repeat;
      height: 450px;
      width: 450px;
    }
    &__head {
      color: #cbb073;
      font-family: "PT Serif", serif;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 75px;
    }
  }
</style>