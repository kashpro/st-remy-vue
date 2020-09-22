<template>
  <div class="editor__field">
    <p class="editor__label-text">{{ text }}</p>
    <input type="file" :name="id" hidden :id="id" accept=".jpg, .jpeg, .png, .gif, .svg">
    <label class="editor__label" :for="id">
        <img :src="`${publicPath}${imagePath}`" :alt="id">
        <div class=" editor__icon"></div>
        <span class="editor__image-text">Загрузить фото</span>
    </label>
    <div class="editor__year">
      <span class="editor__select-text">Укажите год, когда сделана фотография</span>
      <Select :min="min" :initial="initial" :name="selectName"></Select>
    </div>
  </div>
</template>

<script>
//Фотография №1 (тогда)
//name="before" id="before" for="before" alt="before"
//@/assets/images/stremy-01.jpg
//:min="1920"
//:name="'before-year'"
  import Select from "@/components/Select.vue";
  export default {
    props: ["text", "id", "imagePath", "selectName", "min", "initial",],
    components: {Select,},
    data() {
      return {
        publicPath: process.env.BASE_URL,
      };
    },
    computed: {
      // image() {
        // console.log(1);
        // console.log(this.imagePath);
        // return require("../assets/images/stremy-01.jpg");
        // return require(this.imagePath);
		  // },

    }
  }
</script>

<style lang="scss">
  
</style>