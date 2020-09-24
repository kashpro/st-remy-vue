<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><router-link class="nav__link" active-class="nav__link--active" to="/" exact>Главная</router-link></li>
      <li class="nav__item"><a class="nav__link" :href="rulesFileLink" target="blank">Правила конкурса</a></li>
      <li class="nav__item"><router-link class="nav__link" active-class="nav__link--active" to="/gallery">Галерея</router-link></li>
      <li class="nav__item"><router-link class="nav__link" active-class="nav__link--active" to="/winners">Победители</router-link></li>
      <li class="nav__item"><a class="nav__link" href="/admin.html" target="blank">Админ</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        rulesFileLink: CONFIG.RULES_FILE_LINK,
      };
    }, 
  }
</script>

<style lang="scss">
  .nav {
    &__list {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    &__item {
      &:not(:last-child) {
        margin-right: 50px;
      }
    }
    &__link {
      position: relative;
      display: block;
      opacity: 0.75;
      color: #ffffff;
      transition: all 0.2s ease;
      // &:not(:last-child) {
      //   margin-right: 50px;
      // }
      &::before {
        transition: all 0.2s ease;
        position: absolute;
        display: block;
        content: "";
        background-color: #ccb16f;
        width: calc(100% + 20px);
        height: 0px;
        bottom: -18px;
        transform: translateX(-50%);
        left: 50%;
      }
      &:hover {
        opacity: 1;
        &::before {
          bottom: -8px;
          height: 2px;
        }
      }
      &--active {
        opacity: 1;
        cursor: default;
        &::before {
          bottom: -8px;
          height: 2px;
        }
      }
    }
  }
</style>