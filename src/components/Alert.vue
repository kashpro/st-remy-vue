<template>
  <div class="alert" :class="[{'alert--show': isAlertOpen}, typeClass]"  @click="closeAlert" title="Close">
    <div class="container alert__container">
      <p class="alert__text" v-html="alertData.text"></p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Alert",
    computed: {
      ...mapGetters(["isAlertOpen", "alertData"]),
      typeClass() {
        switch (this.alertData.type) {
          case "error": {return "alert--error";}
          case "success": {return "alert--success";}
          case "warning": {return "alert--warning";}
        }
      }
    },
    methods: {
      closeAlert() {
        this.$store.dispatch("closeAlert");
      },
      closeAlertKeyboard(e) {
        if (e.code === "Escape" || e.keyCode === 27) {
          this.closeAlert();
        }
      }
    },
    watch: {
      isAlertOpen() {
        if (this.isAlertOpen) {
          document.addEventListener("click", this.closeAlert);
          setTimeout(() => {window.addEventListener("keyup", this.closeAlertKeyboard);}, 0);
        } else {
          window.removeEventListener("keyup", this.closeAlertKeyboard);
          document.removeEventListener("click", this.closeAlert);
        }
      },
    },
  }
</script>

<style lang="scss">
  .alert {
    cursor: default;
    transition: all 0.3s ease;
    position: fixed;
    width: 100%;
    background-color: #2196f3;
    z-index: 10000;
    opacity: 0;
    top: -100px;
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 1px solid white;
    &__text {
      font-size: 16px;
      @media (max-width: 767px) {
        font-size: 13px;
      }
    }
    &--show {
      top: 0;
      opacity: 1;
    }
    &--error {
      background-color: #ff5252;
    }
    &--success {
      background-color: #4caf50;
    }
    &--warning {
      background-color: #fb8c00;
    }
  }
</style>