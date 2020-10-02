<template>
  <div class="profile-story">
    <Chip v-if="story" class="profile-story__chip" :type="story.draft || story.status"></Chip>
    <form class="profile-story__form">
      <div class="profile-story__box1">
        <ImageField class="profile-story__imagefield" id="before" :small="beforeImageInvalid" :story="story" v-model="beforeImage"></ImageField>
        <Select v-if="this.story.draft === true || this.story.img_before.status === 'edit'" id="before" class="profile-story__select" :story="story" v-model="beforeYear"></Select>
        <div class="profile-story__replacer" v-else>Год, когда сделана фотография: {{ story.img_before.date }}</div>
      </div>
      <div class="profile-story__box1">
        <ImageField class="profile-story__imagefield" id="after" :small="afterImageInvalid" :story="story" v-model="afterImage"></ImageField>
        <Select v-if="this.story.draft === true || this.story.img_after.status === 'edit'" id="after" class="profile-story__select" :story="story" v-model="afterYear"></Select>
        <div class="profile-story__replacer" v-else>Год, когда сделана фотография: {{ story.img_after.date }}</div>
      </div>
      <div class="profile-story__description">
        <span class="profile-story__text">История дружбы (описание):</span>
        <label for="description" class="profile-story__label">Напишите краткую историю о том, как вы сделали эти фотографии.</label>
        <div class="profile-story__box2">
          <Chip :type="story.desc_status" class="profile-story__chip"></Chip><small class="profile-story__comment">{{ story.desc_comment }}</small>
        </div>
        <textarea id="description" class="profile-story__textarea" v-model="desc" placeholder="Введите текст от 140 до 4000 символов:" :disabled="!(story.draft === true || story.desc_status === 'edit')"></textarea>
        <small v-if="descInvalid" class="profile-story__small">{{ descInvalid }}</small>
      </div>
      <div class="profile-story__buttons">
        <Button v-if="isUnlocked" class="profile-story__btn" type="submit" @click.native.prevent="sendStory(false)">Отправить на модерацию</Button>
        <Button v-if="story.draft" class="btn--secondary profile-story__btn" type="submit" @click.native.prevent="sendStory(true)">Сохранить черновик</Button>
      </div>
    </form>
  </div>
</template>

<script>
  import ImageField from "@/components/ImageField.vue";
  import Select from "@/components/Select.vue";
  import Chip from "@/components/Chip.vue";
  import {sizeValidator, imageSizeValidator} from "@/utils/validators.util.js";
  import {required, minLength, maxLength} from "vuelidate/lib/validators";
  import {descInvalid, beforeImageInvalid, afterImageInvalid, profileStoryBeforeImageInvalid, profileStoryAfterImageInvalid} from "@/utils/validations.mixin.js";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";
  

  export default {
    name: "ProfileStory",
    props: {
      "story": {
        default: null,
      },
    },
    // mixins: [pagination],
    components: {ImageField, Select, Chip},
    mixins: [descInvalid, beforeImageInvalid, afterImageInvalid, profileStoryBeforeImageInvalid, profileStoryAfterImageInvalid],
    validations: {
      desc: {required, minLength: minLength(CONFIG.STORY_DESC_MIN_LENGTH), maxLength:maxLength(CONFIG.STORY_DESC_MAX_LENGTH)},
      beforeImage: {imageSizeValidator},
      afterImage: {imageSizeValidator},
    },
    computed: {
      isUnlocked() {
        return this.story.draft === true || this.story.desc_status === "edit" || this.story.img_before.status === "edit" || this.story.img_after.status === "edit";
      },
    },
    data() {
      return {
        desc: this.story.desc,
        beforeImage: null,
        afterImage: null,
        beforeYear: null,
        afterYear: null,
      };
    },
    methods: {
      async sendStory(draft) {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return;
        }
        try {
          const data = new FormData();
          data.append("desc", this.desc);
          data.append("draft", draft);
          if (this.beforeImage) {data.append("imageBefore", this.beforeImage);}
          if (this.afterImage) {data.append("imageAfter", this.afterImage);}
          if (this.beforeYear) {data.append("yearBefore", this.beforeYear);}
          if (this.afterYear) {data.append("yearAfter", this.afterYear);}

          const response = await this.$store.dispatch("updateStory", {data: data, id: this.story.id});
          this.beforeImage = null;
          this.afterImage = null;
          this.beforeYear = null;
          this.afterYear = null;
          //в респонсе объект обновленной истории. В складе заменить историю
          this.$v.$reset();
          this.$store.dispatch("replaceStory", response.data);
          const message = draft ? this.$messages.DRAFT_CREATED : this.$messages.HISTORY_CREATED;
          this.$store.dispatch("openAlert", {type: "success", text: message});
        } catch(err) {
          apiErrorHandler.call(this, err);
        }
      },
    },
  }
</script>

<style lang="scss">
  .profile-story {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__replacer { //стили такие же как у .select
      @media (max-width: 1719px) {
        font-size: 14px;
      }
    }
    &__chip {
      margin-bottom: 10px;
      display: inline-block;
      margin-right: 20px;
      margin-left: 20px;
    }
    &__comment {

    }
    &__form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__box1 {
      flex: 1 1 50%;
      margin-bottom: 60px;
      position: relative;
      z-index: 10;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    &__description {
      position: relative;
      flex: 0 1 1394px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 1719px) {
        flex: 0 1 1100px;
      }
    }
    &__text {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 20px;
    }
    &__label {
      margin-bottom: 10px;
    }
    &__small {
      position: absolute;
      color: #ff0000;
      left: 0;
      bottom: 55px;
    }
    &__textarea {
      width: 100%;
      resize: none;
      padding: 20px 25px;
      border: none;
      background-color: #ffffff;
      border-radius: 5px;
      height: 300px;
      color: #000000;
      margin-bottom: 75px;
      &::placeholder {
        color: rgba(#000000, 0.5);
      }
    }
    &__buttons {
      flex: 1 1 100%;
      display: flex;
      justify-content: center;
    }
    &__btn {
      &:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
</style>