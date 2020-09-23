<template>
  <div class="message">
    <h3 v-if=" modalData.head" class="modal__head message__head">{{ modalData.head }}</h3>
    <p  v-if=" modalData.text" class="modal__text message__text">{{ modalData.text }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters(["modalData",]),
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