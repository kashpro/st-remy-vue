<template>
  <div class="modal" :class="{'modal--show': isStoryModalOpen}" @click.self="closeStoryModal">
    <div class="modal__content">
      <div class="modal__close" @click.self="closeStoryModal"></div>
        <Story>
          <slot name="main"></slot>
        </Story>
      </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Story from "@/components/Story.vue";
  
  export default {
    components: {Story,},
    computed: {
      ...mapGetters(["isStoryModalOpen", "modalType"]),
    },
    methods: {
      closeStoryModal() {
        this.$store.dispatch("closeStoryModal");
      },
      closeStoryModalKeyboard(e) {
        if (e.code === "Escape" || e.keyCode === 27) { //e.keyCode - deprecated
          this.closeStoryModal();
        }
      },
    },
    watch: {
      isStoryModalOpen() {
        if (this.isStoryModalOpen) {
          window.addEventListener("keyup", this.closeStoryModalKeyboard);
        } else {
          window.removeEventListener("keyup", this.closeStoryModalKeyboard);
        }
      },
    },
  }
</script>

<style lang="scss">
  
</style>