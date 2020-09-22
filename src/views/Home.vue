<template>
  <section class="home">
    <Banner></Banner>
    <Promo></Promo>
    <Feedback></Feedback>
    <!-- <Modal></Modal> -->
  </section>
</template>

<script>
  import Banner from "@/components/Banner.vue";
  import Promo from "@/components/Promo.vue";
  import Feedback from "@/components/Feedback.vue";
  // import Modal from "@/components/Modal.vue";

  export default {
    components: {Banner, Promo, Feedback, /* Modal, */},
  }
</script>

<style lang="scss">
  .home {
    position: relative;
    z-index: 5;
  }
</style>