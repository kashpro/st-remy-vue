<template>
  <div class="resform">
    <ModalHead class="resform__modal-head">Восстановление пароля</ModalHead>
    <ModalForm class="resform__modal-form" @submit.native.prevent="sendRestore">
      <ModalInput class="resform__modal-input" text="E-mail *" type="email" v-model="email" :small="emailInvalid"></ModalInput>
      <div class="modal__box1">
        <Button type="submit" class="resform__btn">Восстановить пароль</Button>
      </div>
    </ModalForm>
  </div>
</template>

<script>
  import {email, required} from "vuelidate/lib/validators";
  import {emailInvalid} from "@/utils/validations.mixin.js";

  export default {
     mixins: [emailInvalid],
     validations: {
      email: {required, email},
    },
    data() {
      return {
        email: "",
      };
    },
    methods: {
      sendRestore() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        console.log("restore");
      },
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