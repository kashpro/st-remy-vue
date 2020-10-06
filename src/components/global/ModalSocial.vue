<template>
  <div class="modal-social">
    <span class="modal-social__text">Войти через социальные сети:</span>
    <ul class="modal-social__list">
      <li class="modal-social__item"><SocialLink class="social-link--ok social-link--mr15" title="Одноклассники" href="https://ok.ru">Одноклассники</SocialLink></li>
      <li class="modal-social__item"><SocialLink class="social-link--vk" title="Вконтакте" href="https://vk.com">Вконтакте</SocialLink></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ModalSocial",
  }
</script>

<style lang="scss">
  .modal-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__text {
      text-align: center;
      margin-bottom: 20px;
    }
    &__list {
      display: flex;
    }
  }
</style>