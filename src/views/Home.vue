<template>
  <section class="home">
    <Banner></Banner>
    <Promo></Promo>
    <Feedback></Feedback>
  </section>
</template>

<script>
  import Banner from "@/components/Banner.vue";
  import Promo from "@/components/Promo.vue";
  import Feedback from "@/components/Feedback.vue";
  import MetaInfo from "@/utils/metaInfo.mixin.js";

  export default {
    name: "Home",
    mixins: [MetaInfo],
    components: {Banner, Promo, Feedback},
  }
</script>

<style lang="scss">
  .home {
    position: relative;
    z-index: 5;
  }
</style>