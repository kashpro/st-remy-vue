<template>
  <div class="imagefield">
    <p class="imagefield__label-text">{{ text }}</p>
    <!-- <input type="file" :name="id" hidden :id="id" accept=".jpg, .jpeg, .png, .gif, .svg" @change="onChangeHandler" ref="fileInput"> -->
    <input type="file" hidden required :id="id" accept=".jpg, .jpeg, .png, .gif, .svg" @input="onChangeHandler">
    <label class="imagefield__label" :for="id">
        <img v-if="!image" :src="`${this.publicPath}${this.imagePath}`" alt="placehoder">
        <img v-else :src="image" :alt="id">
        <div class=" imagefield__icon"></div>
        <span class="imagefield__image-text">Загрузить фото</span>
    </label>
    <div class="imagefield__year">
      <span class="imagefield__select-text">Укажите год, когда сделана фотография</span>
      <Select v-model="year"></Select>
      <!-- <Select :initial="initial" :name="selectName" v-model="year"></Select> -->

    </div>
  </div>
</template>

<script>
  import Select from "@/components/Select.vue";
  export default {
    // props: ["text", "id", "imagePath", "selectName", "initial",],
    props: ["text", "id", "imagePath"],
    components: {Select,},
    data() {
      return {
        publicPath: process.env.BASE_URL,
        file: null,
        year: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
      };
    },
    methods: {
      onChangeHandler(e) {
        this.file = e.target.files[0];
        this.$emit('input', {image: this.file, date: this.year});
      },
    },
    computed: {
      image() {
        if (this.file) {
          return window.URL.createObjectURL(this.file);
        }
      },
    },
    watch: {
      year() {
        this.$emit('input', {image: this.file, date: this.year});
      }
    },
  }
</script>

<style lang="scss">
.imagefield {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__label-text {
    margin-bottom: 20px;
  }
  &__label {
    position: relative;
    line-height: 0;
    border-radius: 10px;
    overflow: hidden;
    width: 592px;
    height: 403px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: 15px;
    border: 6px solid #cbb073;
    &:hover {
      img {
        filter: brightness(1.2);
      }
      .imagefield__icon {
        filter: brightness(1.2);
      }
      .imagefield__image-text {
        opacity: 0.5;
      }
    }
    img {
      transition: all 0.2s ease;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__icon {
    transition: all 0.2s ease;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 30px;
    width: 30px;
    height: 33px;
    background: url("../assets/images/upload-icon.png") center no-repeat;
  }
  &__image-text {
    opacity: 1;
    transition: all 0.2s ease;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 100px;
    color: #000000;
  }
  &__select-text {
    margin-right: 15px;
  }
}
 
    
</style>