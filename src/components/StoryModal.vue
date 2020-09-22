<template>
  <div class="story">
    <div class="story__image story__image--wh400">
      <img src="@/assets/images/gallery-03.jpg" alt="before image">
      <img src="@/assets/images/gallery-01.jpg" alt="after image">
    </div>
    <div class="story__box1">
      <div class="story__head">История дружбы:</div>
      <div class="story__share">
        <ul class="story__social">
          <li><a class="social-link social-link--ok social-link--mr15" title="Одноклассники" href="">ok.ru</a></li>
          <li><a class="social-link social-link--vk" title="Вконтакте" href="">vk.com</a></li>
        </ul>
      </div>
      <p class="story__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque fugiat fuga repellat fugit et hic vel, nihil voluptas quidem illum corrupti porro cumque corporis, numquam sint eius dicta quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque fugiat fuga repellat fugit et hic vel, nihil voluptas quidem illum corrupti porro cumque corporis, numquam sint eius dicta quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque fugiat fuga repellat fugit et hic vel, nihil voluptas quidem illum corrupti porro cumque corporis, numquam sint eius dicta quas.</p>
      <span class="story__author">Константинопольский Пантелеймон</span>
      <span class="story__date">2018/2018</span>
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