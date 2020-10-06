<template>
  <small class="chip" :class="typeClass">{{ text }}</small>
</template>

<script>
  export default {
    name: "Chip",
    props: ["type"],
    computed: {
      typeClass() {
        if (this.type) {
          return `chip--${this.type}`;
        }
      },
      text() {
        switch (this.type) {
          case "mod": return "На модерации";
          case "pub": return "Опубликовано";
          case "reject": return "Отклонено";
          case "edit": return "Редактирование";
          default: return "Черновик";
        }
      },
    },
  }
</script>

<style lang="scss">
  .chip {
    border-radius: 3px;
    background-color: #95f;
    color: #000000;
    padding: 5px 10px;
    &--mod {
      background-color: #f90;
    }
    &--pub {
      background-color: #0f1;
    }
    &--reject {
      background-color: #f01;
    }
    &--edit {
      background-color: #19f;
    }
  }
</style>