<template>
  <h2 class="modal-head"><slot></slot></h2>
</template>

<script>
  export default {
    name: "ModalHead",
  }
</script>

<style lang="scss">
   .modal-head {
    text-align: center;
    font-family: "PT Serif", serif;
    font-weight: 700;
    font-size: 32px;
    color: #d0b87d;
  }
</style>