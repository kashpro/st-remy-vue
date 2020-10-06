<template>
  <div class="story">
    <div class="story__image story__image--wh400">
      <img :src="modalData.imgBefore" alt="before image">
      <img :src="modalData.imgAfter" alt="after image">
    </div>
    <div class="story__box1">
      <div class="story__head">История дружбы:</div>
      <div class="story__share">
        <ul class="story__social">
          <li><a class="social-link social-link--ok social-link--mr15" target="blank" title="Одноклассники" :href="modalData.okLink">ok.ru</a></li>
          <li><a class="social-link social-link--vk" target="blank" title="Вконтакте" :href="modalData.vkLink">vk.com</a></li>
        </ul>
      </div>
      <p class="story__text">{{ modalData.text }}</p>
      <span class="story__author">{{ modalData.author }}</span>
      <span class="story__date">{{ modalData.date }}</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "Story",
    computed: {
      ...mapGetters(["modalData"]),
    },
  }
</script>

<style lang="scss">
  .story {
    display: flex;
    @media (max-width: 991px) {
      flex-direction: column;
      max-width: 620px;
      margin: 0 auto;
    }
    @media (max-width: 575px) {
      max-width: 100%;
    }
    &__image {
      flex-shrink: 0;
      width: 500px;
      height: 500px;
      line-height: 0;
      border: 6px solid #cbb073;
      margin-right: 30px;
      @media (max-width: 991px) {
        max-width: 720px;
        margin-right: 0;
        align-self: center;
        margin-bottom: 15px;
      }
      &--wh400 {
        width: 400px;
        height: 400px;
        @media (max-width: 991px) {
          width: 620px;
          height: 620px;
        }
        @media (max-width: 767px) {
          width: 540px;
          height: 540px;
        }
        @media (max-width: 575px) {
          width: 100%;
          height: auto;
        }
      }
      img {
        width: 100%;
        height: 50%;
        object-fit: cover;
        &:first-child {
          border-bottom: 1px solid #ffffff;
        }
      }
    }
    &__head {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 20px;
      @media (max-width: 991px) {
        order: 4;
      }
    }
    &__text {
      font-size: 16px;
      flex-grow: 1;
      max-height: 249px;
      overflow-y: auto;
      margin-bottom: 20px;
      word-wrap: break-word;
      @media (max-width: 991px) {
        order: 5;
      }
    }
    &__share {
      position: relative;
      width: 20px;
      height: 22px;
      background: url("../assets/images/share-icon.png") center no-repeat;
      margin-bottom: 20px;
      transition: all 0.2s ease;
      cursor: pointer;
      opacity: 1;
      @media (max-width: 991px) {
        order: 3;
        margin: 15px 0;
      }
      &:hover {
        .story__social {
          opacity: 1;
        }
      }
    }
    &__author {
      font-size: 16px;
      @media (max-width: 991px) {
        order: 1;
      }
    }
    &__date {
      font-size: 16px;
      @media (max-width: 991px) {
        order: 2;
      }
    }
    &__box1 {
     position: relative;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
    }
    &__social {
      padding: 5px;
      background-color: #000000;
      opacity: 0;
      transition: all 0.2s ease;
      position: absolute;
      display: flex;
      top: -2px;
      left: -2px;
    }
  }
</style>