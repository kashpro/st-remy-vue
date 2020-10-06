<template>
  <div class="theme">
    <p class="theme__head" @click="isOpen = !isOpen">{{ current || "Выберите тему" }}</p>
    <ul class="theme__list" :class="{'theme__list--collapse': !isOpen}">
      <li v-for="(theme, index) in themes" :key="index" class="theme__item" @click="selectTheme(theme)"><p>{{ theme }}</p></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ThemeInput",
  data() {
    return {
      current: "",
      isOpen: false,
      themes: this.$messages.FEEDBACK_THEMES,
    };
  },
  methods: {
    selectTheme(theme) {
      this.current = theme;
      this.isOpen = false;
    },
  },
  watch: {
    current() {
      this.$emit('input', this.current);
    },
  }
}
</script>

<style lang="scss">
  .theme {
    padding: 20px 15px 5px 25px;
    width: 100%;
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
      @media (max-width: 767px) {
        max-height: 200px;
      }
      &--collapse {
        max-height: 0;
      }
    }
    &__item {
      font-size: 14px;
      cursor: pointer;
      margin: 0 15px 15px 15px;
      @media (max-width: 575px) {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
      &:hover {
        text-decoration: underline;
        color: var(--common-text-color);
        opacity: 0.75;
      }
      p {
        width: 100%;
        text-align: right;
      }
    }
  }
</style>