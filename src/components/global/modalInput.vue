<template>
  <label class="modal-input">
    <span>{{ text }}</span>
    <input :type="type" :value="value" class="modal-input__input" @input="$emit('input', $event.target.value)">
    <small v-if="small" class="modal-input__small">{{ small }}</small>
  </label>
</template>

<script>
  export default {
    props: ["text", "type", "small", "value"], 
  }
</script>

<style lang="scss">
  .modal-input {
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-bottom: 25px;
    &__small {
      color: #ff0000;
      position: absolute;
      bottom: -14px;
    }
    &__input {
      background-color: transparent;
      border: none;
      border-bottom: 1px solid rgba(#ffffff, 0.5);
      color: rgba(#ffffff, 0.5);
      padding: 5px 0;
      font-size: 20px;
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