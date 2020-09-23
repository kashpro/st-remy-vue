<template>
  <label class="modal-input">
    <span>Имя *</span>
    <input type="text" class="modal-input__input" name="firstname">
  </label>
</template>

<script>
  export default {
    props: ["labelText", "inputName", "inputType",], 
  }
</script>