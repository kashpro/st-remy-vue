<template>
  <div id="app">
    <component v-if="layout" :is="layout"></component>
    <router-view v-else></router-view>
    <!-- <CommonModal></CommonModal> -->
    <Modal></Modal>
  </div> 
</template>

<script>
  import HomeLayout from "@/views/layouts/HomeLayout.vue";
  // import CommonModal from "@/components/CommonModal.vue";
  import Modal from "@/components/Modal.vue";

  export default {
    computed: {
      layout() {
        return this.$route.meta.layout;
      },
    },
    components: {HomeLayout, /* CommonModal, */ Modal,},
  }
</script>