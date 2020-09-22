<template>
  <div class="resform">
    <h2 class="modal__head">Восстановление пароля</h2>
    <form class="resform__form modal__form">
      <label class="modal__label resform__label"><span>Почта</span><input type="email" class="modal__input" name="email"></label>
      <div class="modal__box1">
        <button type="submit" class="btn modal__btn resform__btn">Восстановить пароль</button>
      </div>
    </form>
  </div>
</template>

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