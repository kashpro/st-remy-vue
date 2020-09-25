<template>
  <div class="home-layout">
    <Header :class="headerPosClass"></Header>
    <!-- <main class="main"> -->
      <router-view></router-view>
    <!-- </main> -->
    <Footer></Footer>
    <!-- <Modal :modalType="modalType"></Modal> -->
    
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
    
  export default {
    name: "HomeLayout",
    components: {Header, Footer,},
    computed: {
      headerPosClass() {
        if (this.$route.meta.headerPos === "abs") {return "header--abs";}
      },
    },
  }
</script>

<style lang="scss">
  .main {
    position: relative; //?
    z-index: 5; //?
  }
</style>