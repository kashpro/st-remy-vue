<template>
  <div class="select">
    <span class="select__text">Укажите год, когда сделана фотография</span>
    <div class="select__box">
      <div class="select__face" @click="isOpen = !isOpen">
        <span class="select__value">{{ current }}</span>
        <span class="select__icon" :class="{'select__icon--rotate': isOpen}">
          <svg x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"/></svg>
        </span>
      </div>
      <ul v-show="isOpen" class="select__list">
        <li v-for="index in (max-min)" class="select__item" :key="index" @click="selectValue(index)">{{ max-index }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
  // import {mapGetters} from "vuex";

  export default {
    name: "Select",
    props: ["id", "story"],
    computed: {
      currentYear() {
        if (this.story) {
          return this.id === "before" ? this.story.img_before.date : this.story.img_after.date;
        } else {
          return CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE;
        }
         
      },
      // ...mapGetters(["beforeYear", "afterYear"]),
      // current() {
      //   return this[this.key];
      // },
    },
    data() {
      return {
        current: null,//CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
        // key: this.id + "Year",
        max: new Date().getFullYear() + 1,
        min: CONFIG.IMAGE_DATE_SELECT_MIN_VALUE,
        isOpen: false,
      };
    },
    mounted() {
      this.current = this.currentYear;
    },
    methods: {
      selectValue(index) {
        const value = this.max - index;
        this.isOpen = false;
        this.current = value;
        this.$emit("input", value);
        // const key = this.id + "Year";
        // this.$store.dispatch("setValue", {value: value, key: this.key});
      },
      closeSelectKeyboard(e) {
        if (e.code === "Escape" || e.keyCode === 27) { //e.keyCode - deprecated
          this.closeSelect();
        }
      },
      closeSelect() {
        this.isOpen = false;
      }
    },
    watch: {
      // currentYear() {
      //   this.current = this.currentYear;
      // },
      isOpen() {
        if (this.isOpen) {
          window.addEventListener("keyup", this.closeSelectKeyboard);
          setTimeout(() => {document.addEventListener("click", this.closeSelect);}, 0); //this.$nextTick - не подходит
        } else {
          window.removeEventListener("keyup", this.closeSelectKeyboard);
          document.removeEventListener("click", this.closeSelect);
        }
      },
    },
  }
</script>

<style lang="scss">
  .select {
    @media (max-width: 1719px) {
      font-size: 14px;
    }
    &__text {
      margin-right: 15px;
    }
    &__box {
      width: 75px;
      display: inline-block;
      position: relative;
      &:hover {
        background-color: rgba(#ffffff, 0.5);
      }
    }
    &__value {
      width: 58px;
      text-align: center;
      padding: 3px 5px;
      display: inline-block;
    }
    &__icon {
      &--rotate {
        svg {
          transform: rotate(180deg);
        }
      }
      svg {
        transition: all 0.2s ease;
        width: 12px;
        height: 12px;
        fill: #ffffff;
      }
    }
    &__list {
      width: 75px;
      position: absolute;
      left: 0;
      top: 100%;
      max-height: 175px;
      overflow-y: auto;
      overflow-x: hidden;
    }
    &__item {
      text-align: center;
      border-bottom: 1px solid #ffffff;
      background-color: #000000;
      padding: 3px 5px;
      cursor: pointer;
      &:hover {
        background-color: #666666;
      }
    }
    &__face {
      cursor: pointer;
      border-bottom: 1px solid #ffffff;
    }
  }
</style>