<template>
  <div class="select">
    <div class="select__face" @click="isOpen = !isOpen">
      <span class="select__value">{{ current }}</span>
      <span class="select__icon" :class="{'select__icon--rotate': isOpen}">
        <svg x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093"/></svg>
      </span>
    </div>
    
    <ul v-show="isOpen" class="select__list">
      <li v-for="index in (max-min)" class="select__item" :key="index" @click="selectValue(index)">{{ max-index }}</li>
    </ul>
    <!-- <input type="hidden" :name="name" :value="current"> -->
    <input type="hidden" :value="current">

  </div>
</template>

<script>
  export default {
    props: {
      // "min": {
      //   default: 1920,
      // },
      "max": {
        default: new Date().getFullYear() + 1,
      },
      // "initial": {
      //   default: 1980,
      // },
      // "name": {},
    },
    data() {
      return {
        min: CONFIG.IMAGE_DATE_SELECT_MIN_VALUE,
        current: CONFIG.IMAGE_DATE_SELECT_INITIAL_VALUE,
        isOpen: false,
      };
    },
    methods: {
      selectValue(index) {
        this.current = this.max - index;
        this.isOpen = false;
        this.$emit("input", this.current);
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
    width: 75px;
    display: inline-block;
    position: relative;
    &:hover {
        background-color: rgba(#ffffff, 0.3);
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
      max-height: 150px;
      overflow-y: auto;
      overflow-x: hidden;
    }
    &__item {
      text-align: center;
      border-bottom: 1px solid #ffffff;
      padding: 3px 5px;
      cursor: pointer;
      &:hover {
        background-color: rgba(#ffffff, 0.3);
      }
    }
    &__face {
      cursor: pointer;
      border-bottom: 1px solid #ffffff;
    }
  }
</style>