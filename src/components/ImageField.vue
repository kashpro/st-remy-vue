<template>
  <div class="imagefield">
    <p class="imagefield__label-text">{{ text }}</p>
    <p class="imagefield__info"><Chip :type="chip" class="imagefield__chip"></Chip><small class="imagefield__comment">{{ comment }}</small></p>
    <input type="file" hidden required :id="id" accept=".jpg, .jpeg, .png, .gif, .svg" @input="setImage">
    <label class="imagefield__label" :for="id">
      <img v-if="!image" :src="fileFromServer || imagePath" alt="placeholder">
      <img v-else :src="image" :alt="id">
      <div class=" imagefield__icon"></div>
      <span class="imagefield__image-text">Загрузить фото</span>
    </label>
    <small class="imagefield__small" v-if="small">{{ small }}</small>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Chip from "@/components/Chip.vue";

  export default {
    name: "ImageField",
    props: ["id", "small", "story"],
    components: {Chip},
    computed: {
      ...mapGetters(["beforeImage", "afterImage"]),
      image() {
        if (this.file) {
          return window.URL.createObjectURL(this.file);
        }
      },
      text() {
        return this.id === "before" ? "Фотография №1 (тогда)" : "Фотография №2 (сейчас)";
      },
      imagePath() {
        return this.id === "before" ? `${this.publicPath}img/stremy-01.jpg` :  `${this.publicPath}img/stremy-02.jpg`;
      },
      fileFromServer() {
        return this.id === "before" ? `${CONFIG.SERVER_BASE}${this.story.images[0].image}` : `${CONFIG.SERVER_BASE}${this.story.images[1].image}`;
      },
      chip() {
        return this.id === "before" ? this.story.images[0].status : this.story.images[1].status;
      },
      comment() {
        return this.id === "before" ? this.story.images[0].comment : this.story.images[1].comment;
      }
    },
    data() {
      return {
        // key: this.id + "Image",
        publicPath: process.env.BASE_URL,
        file: null,
        // year: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
      };
    },
    methods: {
      setImage(e) {
        this.file = e.target.files[0];
        this.$emit('input', this.file);
        // this.$store.dispatch("setValue", {value: this.file, key: this.key});
      },
    },
  }
</script>

<style lang="scss">
  .imagefield {
    position: relative;
    display: flex;
    flex-direction: column;
    // align-items: center;
    &__label-text {
      margin-bottom: 10px;
    }
    &__chip {
      margin-right: 20px;
    }
    &__info {
      margin-bottom: 20px;
    }
    &__small {
      color: #ff0000;
      position: absolute;
      bottom: -4px;
    }
    &__label {
      position: relative;
      line-height: 0;
      border-radius: 10px;
      overflow: hidden;
      // max-width: 592px;
      // max-height: 592px;
      width: 592px;
      height: 592px;
      cursor: pointer;
      transition: all 0.2s ease;
      margin-bottom: 15px;
      border: 6px solid #cbb073;
      @media (max-width: 1719px) {
        // max-width: 500px;
        // max-height: 500px;
        height: 500px;
        width: 500px;
      }
      &:hover {
        img {
          filter: brightness(1.2);
        }
        .imagefield__icon {
          filter: brightness(1.2);
        }
        // .imagefield__image-text {
        //   opacity: 0.5;
        // }
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
      //  -webkit-text-stroke: 1px #ffffff;
      transition: all 0.2s ease;
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 100px;
      color: #000000;
    }
    // &__select-text {
    //   margin-right: 15px;
    // }
  }
</style>