<template>
  <div class="resform">
    <!-- <h2 class="modal__head">Восстановление пароля</h2> -->
    <ModalHead class="resform__modal-head">Восстановление пароля</ModalHead>
    <!-- <form class="resform__form modal__form" @submit.prevent="sendRestore"> -->
    <ModalForm class="resform__modal-form" @submit.native.prevent="sendRestore">
      <!-- <label class="modal__label resform__label"><span>Почта</span><input type="email" class="modal__input" name="email"></label> -->
      <ModalInput class="resform__modal-input" text="E-mail *" name="email" type="email"></ModalInput>
      <div class="modal__box1">
        <!-- <button type="submit" class="btn modal__btn resform__btn">Восстановить пароль</button> -->
        <Button type="submit" class="resform__btn">Восстановить пароль</Button>
      </div>
    </ModalForm>
    <!-- </form> -->
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
    &__modal-head {
      margin-bottom: 30px;
    }
    &__btn {
      margin: 0 auto;
    }
    &__modal-form {
      flex-wrap: nowrap;
      flex-direction: column;
    }
    &__modal-input {
      width: 357px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
</style>