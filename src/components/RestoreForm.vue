<template>
  <div class="resform">
    <h2 class="modal__head">Восстановление пароля</h2>
    <form class="resform__form modal__form" @submit.prevent="sendRestore">
      <label class="modal__label resform__label"><span>Почта</span><input type="email" class="modal__input" name="email"></label>
      <div class="modal__box1">
        <!-- <button type="submit" class="btn modal__btn resform__btn">Восстановить пароль</button> -->
        <Button type="submit" class="modal__btn resform__btn">Восстановить пароль</Button>
      </div>
    </form>
  </div>
</template>

<script>
  // import Button from "@/components/Button.vue";
  
  export default {
    // components: {Button,},
    methods: {
      sendRestore() {
        console.log("restore");
      }
    },
  }
</script>

<style lang="scss">
  .resform {
    &__btn {
      margin: 0 auto;
    }
    &__form {
      flex-wrap: nowrap;
      flex-direction: column;
    }
    &__label {
      width: 357px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
</style>