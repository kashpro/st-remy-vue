<template>
  <div class="home-layout">
    <Header :class="headerPosClass"></Header>
    <HeaderMobile :class="headerMobPosClass"></HeaderMobile>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import HeaderMobile from "@/components/HeaderMobile.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "HomeLayout",
    components: {Header, HeaderMobile, Footer},
    computed: {
      headerPosClass() {
        if (this.$route.meta.headerPos === "abs") {return "header--abs";}
      },
      headerMobPosClass() {
        if (this.$route.meta.headerPos === "abs") {return "header-mob--abs";}
      }
    },
  }
</script>

<style lang="scss">

</style>