<template>
  <div class="theme">
    <p class="theme__head" @click="isOpen = !isOpen">{{ current }}</p>
    <ul class="theme__list" :class="{'theme__list--collapse': !isOpen}">
      <li v-for="(theme, index) in themes" :key="index" class="theme__item" @click="selectTheme(theme)"><p>{{ theme }}</p></li>
    </ul>
    <input type="hidden" :name="name" :value="current">
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      current: "Выберите тему",
      isOpen: false,
      themes: [
        "Как зарегистрироваться на сайте",
        "Технические проблемы с сайтом",
        "Как удалить свои персональные данные",
        "Нет ответа по обратной связи",
        "Прошу связаться со мной",
      ],
    }
  },
  methods: {
    selectTheme(theme) {
      this.current = theme;
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss">
  .theme {
    padding: 20px 15px 5px 25px;
    width: 100%;
    // background-color: red;
    // height: 20px; 
    border-radius: 5px;
    &__head {
      text-align: right;
      margin-bottom: 15px;
      margin-right: 15px;
      cursor: pointer;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-left: auto;
      max-width: 800px;
      list-style: disc outside;
      transition: all 0.5s ease;
      max-height: 100px;
      overflow: hidden;
      &--collapse {
        max-height: 0;
      }
    }
    &__item {
      font-size: 14px;
      cursor: pointer;
      margin: 0 15px 15px 15px;
      &:hover {
        text-decoration: underline;
        color: #ffffff;
        opacity: 0.75;
      }
    }
  }
 
</style>