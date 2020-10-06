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
    font-family: var(--second-font);
    font-weight: 700;
    font-size: 32px;
    color: var(--prime-color);
    @media (max-width: 575px) {
      font-size: 24px;
    }
  }
</style>