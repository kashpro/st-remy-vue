<template>
  <div class="modal" :class="{'modal--show': isCommonModalOpen}" @click.self="closeCommonModal">
    <div class="modal__content">
      {{ commonModalType }}
      <div class="modal__close" @click.self="closeCommonModal"></div>
        <component :is="commonModalType">
          <!-- <slot></slot> -->
          </component>
      </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import RegisterForm from "@/components/RegisterForm.vue";
  import LoginForm from "@/components/LoginForm.vue";
  import RestoreForm from "@/components/RestoreForm.vue";
  import Message from "@/components/Message.vue";
  // import Story from "@/components/Story.vue";
  
  export default {
    components: {RegisterForm, LoginForm, RestoreForm, Message, /* Story, */},
    computed: {
      ...mapGetters(["isCommonModalOpen", "commonModalType",]),
    },
    methods: {
      closeCommonModal() {
        this.$store.dispatch("closeCommonModal");
      },
      closeCommonModalKeyboard(e) {
        if (e.code === "Escape" || e.keyCode === 27) { //e.keyCode - deprecated
          this.closeCommonModal();
        }
      },
    },
    watch: {
      isCommonModalOpen() {
        if (this.isCommonModalOpen) {
          window.addEventListener("keyup", this.closeCommonModalKeyboard);
        } else {
          window.removeEventListener("keyup", this.closeCommonModalKeyboard);
        }
      },
    },
    updated() {
      console.log(this.commonModalType);
    }
  }
</script>

<style lang="scss">
  
</style>