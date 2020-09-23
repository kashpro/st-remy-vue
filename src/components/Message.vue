<template>
  <div class="message">
    <ModalHead v-if="modalData.head" class="message__modal-head">{{ modalData.head }}</ModalHead>
    <!-- <h3 v-if=" modalData.head" class="modal__head message__head">{{ modalData.head }}</h3> -->
    <p v-if=" modalData.text" class="message__text">{{ modalData.text }}</p>
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
    &__modal-head {
      margin-bottom: 30px;
    }
    &__text {
      text-align: center;
    }
  }
</style>