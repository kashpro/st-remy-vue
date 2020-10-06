<template>
  <a class="social-link"><slot></slot></a>
</template>

<script>
  export default {
    name: "SocialLink",
  }
</script>

<style lang="scss">
  .social-link {
    opacity: 0.75;
    display: block;
    width: 18px;
    height: 18px;
    font-size: 0;
    background-position: center;
    background-repeat: no-repeat;
    &--contacts {
      background-image: url("../../assets/images/contacts.png");
    }
    &--ok {
      background-image: url("../../assets/images/ok.png");
    }
    &--vk {
      background-image: url("../../assets/images/vk.png");
    }
    &--mr15 {
      margin-right: 15px;
    }
    &--mr40 {
      margin-right: 40px;
    }
    &:hover {
      opacity: 1;
    }
  }
</style>