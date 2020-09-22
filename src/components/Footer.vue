<template>
  <footer class="footer">
    <div class="container footer__container">
      <router-link class="footer__logo" to="/"><img src="@/assets/images/logo-02.png" alt="logo"></router-link>
      <div class="footer__box">
        <Nav class="footer__nav"></Nav>
        <div class="footer__copyright"><p>© 2018-{{ new Date().getFullYear() }} E. ReMY MARTIN & CO<br>PLEASE DRINK RESPONSIBLY</p></div>
      </div>
      <div class="footer__social">
        <a class="social-link social-link--contacts social-link--mr40" title="Контакты" href="">Контакты</a>
        <a class="social-link social-link--ok social-link--mr15" title="Одноклассники" href="">ok.ru</a>
        <a class="social-link social-link--vk" title="Вконтакте"  href="">vk.com</a>
      </div>
    </div>
  </footer>
</template>

<script>
  import Nav from "@/components/Nav.vue";

  export default {
    components: {Nav},
  }
</script>

<style lang="scss">
  .footer {
    margin-top: -370px;
    position: relative; //?
    z-index: 0; //?
    height: 650px;
    background-image: url("../assets/images/bottle.png");
    background-repeat: no-repeat;
    background-position: calc(50% + 705px) -176px;
    background-size: 1200px auto;
    overflow-y: visible;
    display: flex;
    align-items: flex-end;
    &__container {
      height: 280px;
      display: flex;
    }
    &__box {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__logo {
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.75;
    }
    &__nav {
      margin-top: 100px;
    }
    &__copyright {
      text-align: center;
      margin-bottom: 20px;
      opacity: 0.75;
    }
    &__social {
      width: 120px;
      align-self: flex-end;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
    }
  }
</style>