<template>
  <div id="app">
    <component v-if="layout" :is="layout"></component>
    <router-view v-else></router-view>
    <Modal></Modal>
    <Alert></Alert>
  </div> 
</template>

<script>
  import HomeLayout from "@/views/layouts/HomeLayout.vue";
  import Alert from "@/components/Alert.vue";
  import Modal from "@/components/Modal.vue";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";

  export default {
    name: "App",
    computed: {
      layout() {
        return this.$route.meta.layout;
      },
    },
    components: {HomeLayout, Alert, Modal},
    async beforeMount() {
      if (localStorage.getItem("token")) {
        try {
          const response = await this.$store.dispatch("getUserInfo", localStorage.getItem("token"));
          this.$store.dispatch("setUserInfo", response.data);
        } catch(err) {
          localStorage.removeItem("token");
        }
      }
      if (JSON.parse(localStorage.getItem("agePass")) !== true) {
        this.$router.push("/start");
      }
    },
  }
</script>