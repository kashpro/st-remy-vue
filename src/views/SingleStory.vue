<template>
  <div class="container singlestory__container">
    <div v-if="story" class="story singlestory__story">
      <div class="story__image story__image--wh400">
        <img :src="story.img_before.image" alt="before image">
        <img :src="story.img_after.image" alt="after image">
      </div>
      <div class="story__box1">
        <div class="story__head">История дружбы:</div>
        <div class="story__share">
          <ul class="story__social">
            <li><a class="social-link social-link--ok social-link--mr15" target="blank" title="Одноклассники" :href="okShareLinkCreate(story.id)">ok.ru</a></li>
            <li><a class="social-link social-link--vk" target="blank" title="Вконтакте" :href="vkShareLinkCreate(story.id)">vk.com</a></li>
          </ul>
        </div>
        <p class="story__text">{{ story.desc }}</p>
        <span class="story__author">{{ story.user }}</span>
        <span class="story__date">{{ `${story.img_before.date}/${story.img_after.date}` }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";
  import share from "@/mixins/share.mixin.js";

  export default {
    name: "SingleStory",
    mixins: [share],
    props: ["id"],
    data() {
      return {
        story: null,
      };
    },
    async beforeMount() {
      try {
        let response = await this.$store.dispatch("getSingleStory", this.id);
        this.story = response.data;
      } catch(err) {
        apiErrorHandler.call(this, err);
      }
    },
  }
</script>

<style lang="scss">
  .singlestory {
    &__container {
      position: relative;
      z-index: 15;
      margin-top: 50px;
      margin-bottom: 320px;
      @media (max-width: 1279px) {
        margin-bottom: 40px;
      }
    }
  }
</style>