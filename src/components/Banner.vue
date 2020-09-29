<template>
  <section class="banner">
    <Carousel></Carousel>
    <div class="container banner__container">
      <h1 class="banner__head">Дружба не стареет!</h1>
      <p class="banner__text">Сегодня мы создаем новые воспоминания со старыми друзьями, сравнивая "тогда" и "сейчас". Что изменилось в мире, и как изменились мы сами, единственное, что остается неизменным - это наша дружба!</p>
      <Register v-if="!userInfo"></Register>
    </div>
  </section>
</template>

<script>
  import Carousel from "@/components/Carousel.vue";
  import Register from "@/components/Register.vue";
  import {mapGetters} from "vuex";

  export default {
    name: "Banner",
    components: {Carousel, Register},
    computed: {
      ...mapGetters(["userInfo"]),
    },
  }
</script>

<style lang="scss">
  .banner {
    position: relative;
    z-index: 1;
    // height: 1080px;
    height: 56.25vw;
    z-index: 1;
    margin-bottom: 100px;
    &__container {
      position: relative;
      height: 100%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &__head {
      font-size: 72px;
      text-transform: uppercase;
      font-family: "PT Serif", serif;
      margin-bottom: 40px;
      @media (max-width: 1719px) {
        font-size: 60px;
        margin-bottom: 25px;
      }
    }
    &__text {
      max-width: 680px;
      line-height: 26px;
      text-align: center;
      margin-bottom: 75px;
      @media (max-width: 1719px) {
        margin-bottom: 45px;
      }
    }
  }
</style>