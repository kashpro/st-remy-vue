<template>
  <div class="imagefield">
    <p class="imagefield__label-text">{{ text }}</p>
    <p v-if="story" class="imagefield__info"><Chip :type="chip" class="imagefield__chip"></Chip><small class="imagefield__comment">{{ comment }}</small></p>
    <input type="file" hidden :id="story ? `${id}${story.id}` : id" accept=".jpg, .jpeg, .png, .gif, .svg" @input="setImage" :disabled="isDisabled">
    <label class="imagefield__label" :class="{'imagefield__label--enabled': !isDisabled}" :for="story ? `${id}${story.id}` : id">
      <img v-if="!image" :src="fileFromServer || imagePath" alt="placeholder">
      <img v-else :src="image" :alt="id">
      <div v-if="!isDisabled" class=" imagefield__icon"></div>
      <span v-if="!isDisabled" class="imagefield__image-text">Загрузить фото</span>
    </label>
    <small class="imagefield__small" v-if="small">{{ small }}</small>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Chip from "@/components/Chip.vue";

  export default {
    name: "ImageField",
    props: ["id", "small", "story", "rotator"],
    components: {Chip},
    computed: {
      image() {
        if (this.file) {
          return window.URL.createObjectURL(this.file);
        }
      },
      text() {
        return this.id === "before" ? "Фотография №1 (тогда)" : "Фотография №2 (сейчас)";
      },
      imagePath() {
        return this.id === "before" ? `${this.publicPath}static/img/stremy-01.jpg` : `${this.publicPath}static/img/stremy-02.jpg`;
      },
      fileFromServer() {
        if (this.story) {
          return this.id === "before" ? this.story.img_before.image : this.story.img_after.image;
        } else {
          return null;
        }
      },
      chip() {
        if (this.story) {
          return this.id === "before" ? this.story.img_before.status : this.story.img_after.status;
        } else {
          return null;
        }
      },
      comment() {
        if (this.story) {
          return this.id === "before" ? this.story.img_before.comment : this.story.img_after.comment;
        } else {
          return null;
        }
      },
      imageStatus() {
        if (this.story) {
          return this.id === "before" ? this.story.img_before.status : this.story.img_after.status;
        } else {
          return null;
        }
      },
      isDisabled() {
        if (this.story) {
          return !(this.story.draft === true || this.imageStatus === 'edit');
        } else {
          return false;
        }
      }
    },
    data() {
      return {
        publicPath: process.env.BASE_URL,
        file: null,
      };
    },
    methods: {
      setImage(e) {
        this.file = e.target.files[0];
        this.$emit('input', this.file);
      },
    },
    watch: {
      rotator() {
        this.file = null;
      }
    }
  }
</script>

<style lang="scss">
  .imagefield {
    position: relative;
    display: flex;
    flex-direction: column;
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
      width: 592px;
      height: 592px;
      transition: all 0.2s ease;
      margin-bottom: 15px;
      border: 6px solid #cbb073;
      @media (max-width: 1719px) {
        height: 500px;
        width: 500px;
      }
      @media (max-width: 1279px) {
        height: 350px;
        width: 350px;
      }
      @media (max-width: 767px) {
        height: 540px;
        width: 540px;
      }
      @media (max-width: 575px) {
        height: 100%;
        width: auto;
      }
      &--enabled {
        cursor: pointer;
        &:hover {
          img {
            filter: brightness(1.2);
          }
          .imagefield__icon {
            filter: brightness(1.2);
          }
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
      @media (max-width: 575px) {
        font-size: 16px;
      }
    }
  }
</style>