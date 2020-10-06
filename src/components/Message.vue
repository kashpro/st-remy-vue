<template>
  <div class="message">
    <ModalHead v-if="modalData.head" class="message__modal-head">{{ modalData.head }}</ModalHead>
    <p v-if=" modalData.text" class="message__text">{{ modalData.text }}</p>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Message",
    computed: {
      ...mapGetters(["modalData"]),
    }    
  }
</script>

<style lang="scss">
  .message {
    &__modal-head {
      margin-bottom: 30px;
    }
    &__text {
      text-align: center;
    }
  }
</style>