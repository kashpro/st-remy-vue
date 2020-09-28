<template>
  <div class="home-layout">
    <Header :class="headerPosClass"></Header>
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "HomeLayout",
    components: {Header, Footer},
    computed: {
      headerPosClass() {
        if (this.$route.meta.headerPos === "abs") {return "header--abs";}
      },
    },
  }
</script>

<style lang="scss">

</style>