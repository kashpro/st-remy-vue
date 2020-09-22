<template>
  <p>Start</p>
</template>

<script>
import LoginFormVue from '../components/LoginForm.vue';
export default {
  mounted() {
    this.$store.dispatch("openCommonModal", {type: "Message", head: "Header golden boy", message: "lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100 lorem100"});
  }
}
</script>