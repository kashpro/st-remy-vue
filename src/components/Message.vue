<template>
  <div class="message">
    <h3 class="modal__head message__head">{{ head }}</h3>
    <p class="modal__text message__text">{{ message }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters(["head", "message",]),
    }    
  }
</script>

<style lang="scss">
  .message {
    // &__head {
    //   margin-bottom: 0;
    // }
  }
</style>