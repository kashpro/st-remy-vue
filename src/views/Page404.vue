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
  import MetaInfo from "@/mixins/metaInfo.mixin.js";

  export default {
    name: "Page404",
    mixins: [MetaInfo],
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
      align-items: center;
      justify-content: center;
      height: 100%;
      @media (max-width: 991px) {
        flex-direction: column-reverse;
      }
    }
    &__box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 100px;
      @media (max-width: 991px) {
        margin-right: 0;
        flex-shrink: 0;
      }
    }
    &__image {
      background: url("../assets/images/glass.png") center no-repeat;
      height: 450px;
      width: 450px;
      @media (max-width: 1719px) {
        width: 350px;
        height: 350px;
        background-size: cover;
      }
      @media (max-width: 991px) {
        margin-bottom: 30px;
        flex-shrink: 0;
      }
      @media (max-width: 991px) and (max-height: 545px) {
        width: 250px;
        height: 250px;
        margin-bottom: 0px;
      }
    }
    &__head {
      color: #cbb073;
      font-family: "PT Serif", serif;
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 75px;
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }
      @media (max-width: 991px) and (max-height: 545px) {
        margin-bottom: 10px;
      }
      @media (max-width: 575px) {
        text-align: center;
      }
    }
  }
</style>