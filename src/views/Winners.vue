<template>
  <div class="winners">
    <div class="container winners__container">
      <h1 class="winners__head" id="winners">Поздравляем победителей конкурса #ДрузьяForever!</h1>
      <p class="winners__text">Размещай свои истории дружбы и голосуй за понравившиеся работы участников до 30 ноября 2018 г.</p>
      <ul class="winners__list">
        <li v-for="(winner, index) in items" :key="index" class="winners__item">
          <span class="winners__date">{{ winner.week }}</span>
          <span v-if="winner.main" class="winners__status">Главный победитель конкурса от SТ-RÉMY</span>
          <div class="winners__line"></div>
          <div class="story winners__story">
            <div class="story__image story__image--wh400">
              <img :src="winner.history.img_before.image" alt="before image">
              <img :src="winner.history.img_after.image" alt="after image">
            </div>
            <div class="story__box1">
              <div class="story__head">История дружбы:</div>
              <div class="story__share">
                <ul class="story__social">
                  <li><a class="social-link social-link--ok social-link--mr15" target="blank" title="Одноклассники" :href="okShareLinkCreate(winner.history.id)">ok.ru</a></li>
                  <li><a class="social-link social-link--vk" target="blank" title="Вконтакте" :href="vkShareLinkCreate(winner.history.id)">vk.com</a></li>
                </ul>
              </div>
              <p class="story__text">{{ winner.history.desc }}</p>
              <span class="story__author">{{ winner.history.user }}</span>
              <span class="story__date">{{ `${winner.history.img_before.date}/${winner.history.img_after.date}` }}</span>
            </div>
          </div>
        </li>
      </ul>
      <paginate
        v-if="pageCount > 1"
        v-model="page"
        :pageCount="pageCount"
        :clickHandler="pageChangeHandler"
        prevText="Назад"
        nextText="Вперед"
        containerClass="pagination"
        pageLinkClass="pagination__link"
        prevLinkClass="pagination__link"
        nextLinkClass="pagination__link"
        active-class="pagination__link pagination__link--active"
        disabled-class="pagination__link pagination__link--disabled"
        :noLiSurround="true"
      >
      </paginate>
    </div>
  </div>
</template>

<script>
  import MetaInfo from "@/mixins/metaInfo.mixin.js";
  import {mapGetters} from "vuex";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";
  import pagination from "@/mixins/pagination.mixin.js";
  import share from "@/mixins/share.mixin.js";

  export default {
    name: "Winners",
    mixins: [MetaInfo, pagination, share],
    computed: {
      ...mapGetters(["winners"]),
    },
    async mounted() {
      try {
        await this.$store.dispatch("getWinners");
        this.setupPagination(this.winners, CONFIG.PAGINATION_WINNERS_PER_PAGE, "#winners");
      } catch(err) {
        apiErrorHandler.call(this, err);
      }
    },
  }
</script>

<style lang="scss">
  .winners {
    position: relative;
    z-index: 15;
    margin-top: 120px;
    margin-bottom: 320px;
    @media (max-width: 1279px) {
      margin-bottom: 40px;
    }
    &__head {
      font-size: 36px;
      font-family: var(--second-font);
      font-weight: 700;
      color: var(--prime-color);
      text-align: center;
      margin-bottom: 25px;
    }
    &__text {
      max-width: 580px;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 50px;
    }
    &__item {
      display: flex;
      flex-direction: column;
      margin-bottom: 100px;
    }
    &__date {
      font-size: 14px;
      margin-bottom: 15px;
    }
    &__status {
      font-family: var(--second-font);
      font-weight: 700;
    }
    &__line {
      background: url("../assets/images/stripe.png") center no-repeat;
      height: 36px;
      background-size: cover;
      @media (max-width: 1279px) {
        height: 26px;
      }
      @media (max-width: 991px) {
        height: 18px;
      }
    }
  }
</style>