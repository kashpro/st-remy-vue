<template>
  <footer class="footer">
    <div class="container footer__container">
      <router-link class="footer__logo" to="/"><img src="@/assets/images/logo-02.png" alt="logo"></router-link>
      <div class="footer__box">
        <Nav class="footer__nav"></Nav>
        <div class="footer__copyright"><p>© 2018-{{ new Date().getFullYear() }} E. ReMY MARTIN & CO<br>PLEASE DRINK RESPONSIBLY</p></div>
      </div>
      <div class="footer__social">
        <SocialLink class="social-link--contacts social-link--mr40" title="Контакты" href="" @click.prevent.native="goToFeedback">Контакты</SocialLink>
        <SocialLink class="social-link--ok social-link--mr15" target="blank" title="Одноклассники" :href="promoOkLink">Одноклассники</SocialLink>
        <SocialLink class="social-link--vk" target="blank" title="Вконтакте" :href="promoVkLink">Вконтакте</SocialLink>
      </div>
    </div>
  </footer>
</template>

<script>
  import Nav from "@/components/Nav.vue";

  export default {
    name: "Footer",
    components: {Nav},
    data() {
      return {
        promoVkLink: CONFIG.PROMO_VK_LINK,
        promoOkLink: CONFIG.PROMO_OK_LINK,
      };
    },
    methods: {
      goToFeedback() {
        this.$router.push({path: "/", hash: "#feedback"}).catch(() => {});
        setTimeout(() => { location.href = this.$route.hash }, 0);
      },
    },
  }
</script>

<style lang="scss">
  .footer {
    margin-top: -370px;
    position: relative; 
    z-index: 0;
    height: 650px;
    background-image: url("../assets/images/bottle.png");
    background-repeat: no-repeat;
    background-position: calc(50% + 705px) -176px;
    background-size: 1200px auto;
    overflow-y: visible;
    display: flex;
    align-items: flex-end;
    @media (max-width: 1719px) {
      background-position: calc(50% + 505px) -176px;
      height: 570px;
    }
    @media (max-width: 1279px) {
      background: none;
      margin-top: 0;
      height: auto;
    }
    &__container {
      height: 280px;
      display: flex;
      @media (max-width: 1719px) {
        height: 200px;
      }
      @media (max-width: 991px) {
        height: auto;
        flex-direction: column;
        align-items: center;
      }
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
      @media (max-width: 1719px) {
        margin-top: 45px;
      }
      @media (max-width: 991px) {
        margin-top: 25px;
        margin-bottom: 25px;
      }
    }
    &__copyright {
      text-align: center;
      margin-bottom: 20px;
      opacity: 0.75;
      @media (max-width: 1719px) {
        font-size: 14px;
      }
      @media (max-width: 991px) {
        margin-bottom: 0;
      }
      @media (max-width: 575px) {
        margin-bottom: 15px;
      }
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