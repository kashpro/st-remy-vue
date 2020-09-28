<template>
  <div class="imagefield">
    <p class="imagefield__label-text">{{ text }}</p>
    <!-- <input type="file" :name="id" hidden :id="id" accept=".jpg, .jpeg, .png, .gif, .svg" @change="onChangeHandler" ref="fileInput"> -->
    <input type="file" hidden required :id="id" accept=".jpg, .jpeg, .png, .gif, .svg" @input="setImage">
    <label class="imagefield__label" :for="id">
        <img v-if="!image" :src="`${this.publicPath}${this.imagePath}`" alt="placehoder">
        <img v-else :src="image" :alt="id">
        <div class=" imagefield__icon"></div>
        <span class="imagefield__image-text">Загрузить фото</span>
    </label>
    <small class="imagefield__small" v-if="small">{{ small }}</small>
    <div class="imagefield__year">
      <span class="imagefield__select-text">Укажите год, когда сделана фотография</span>
      <Select :id="id"></Select>
      <!-- <Select :initial="initial" :name="selectName" v-model="year"></Select> -->
    </div>
  </div>
</template>

<script>
  import Select from "@/components/Select.vue";
  import {mapGetters} from "vuex";

  export default {
    name: "ImageField",
    // props: ["text", "id", "imagePath", "selectName", "initial",],
    props: ["text", "id", "imagePath", "small"],
    components: {Select,},
    computed: {
      ...mapGetters(["beforeImage", "afterImage"]),
      image() {
        if (this[this.key]) {
          return window.URL.createObjectURL(this[this.key]);
        }
      },
    },
    data() {
      return {
        key: this.id + "Image",
        publicPath: process.env.BASE_URL,
        file: null,
        year: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
      };
    },
    methods: {
      setImage(e) {
        this.file = e.target.files[0];
        // this.$emit('input', {image: this.file, date: this.year});
        this.$store.dispatch("setValue", {value: this.file, key: this.key});
      },
    },
  }
</script>

<style lang="scss">
  .imagefield {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__label-text {
      margin-bottom: 20px;
    }
    &__small {
      color: #ff0000;
      position: absolute;
      bottom: 25px;
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