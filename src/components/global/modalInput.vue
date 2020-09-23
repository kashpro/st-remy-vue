<template>
  <label class="modal-input">
    <span>{{ text }}</span>
    <input :type="type" class="modal-input__input" :name="name">
  </label>
</template>

<script>
  export default {
    props: ["text", "name", "type",], 
  }
</script>

<style lang="scss">
  .modal-input {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    &__input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid rgba(#ffffff, 0.5);
      color: rgba(#ffffff, 0.5);
      padding: 5px 0;
      font-size: 20px;
      margin-bottom: 25px;
      transition: all 0.3s ease;
      &:hover {
        border-bottom: 1px solid rgba(#ffffff, 1);
        color: rgba(#ffffff, 1);
      }
      &:focus {
        border-bottom: 1px solid rgba(#ffffff, 1);
        color: rgba(#ffffff, 1);
      }
    }
  }
</style>