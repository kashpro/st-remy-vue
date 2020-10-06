<template>
  <div class="profile">
    <div class="container profile__container">
      <h1 class="profile__head">Личный кабинет</h1>
      <p class="profile__text">Регистрируйся и принимай участие в конкурсе от St.Remy. Стань победителем, получи подарок для себя и своих друзей!</p>
      <p class="profile__name">{{ fullName }}</p>
      <div class="editor profile__editor">
        <h2 class="profile__head2">Редактор истории</h2>
        <div class="profile__line"></div>
        <ProfileStory></ProfileStory>
      </div>
      <div class="profile__stories-box" v-if="userStories.length > 0">
        <h2 class="profile__head2" id="stories">Мои истории дружбы</h2>
        <ul class="profile__list">
          <li v-for="story in items" class="profile__item" :key="story.id">
            <div class="profile__line"></div>
            <ProfileStory :story="story"></ProfileStory>
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
  </div>
</template>

<script>
  import ProfileStory from "@/components/ProfileStory.vue";
  import {mapGetters} from "vuex";
  import {apiErrorHandler} from "@/utils/apiErrorHandler.util.js";
  import MetaInfo from "@/mixins/metaInfo.mixin.js";
  import pagination from "@/mixins/pagination.mixin.js";

  export default {
    name: "Profile",
    mixins: [MetaInfo, pagination],
    components: {ProfileStory},
    computed: {
      ...mapGetters(["userInfo", "userStories"]),
      fullName() {
        if (this.userInfo) {
          return `${this.userInfo.profile.first_name} ${this.userInfo.profile.surname}`;
        }
      },
    },
    async mounted() {
      try {
        await this.$store.dispatch("getUserStories");
        this.setupPagination(this.userStories, CONFIG.PAGINATION_PROFILE_PER_PAGE, "#stories");
      } catch(err) {
        apiErrorHandler.call(this, err);
      }
    },
    watch: {
      userStories() {
        this.setupPagination(this.userStories, CONFIG.PAGINATION_PROFILE_PER_PAGE, "#stories");
      }
    }
  }
</script>

<style lang="scss">
  .profile {
    position: relative;
    z-index: 15;
    margin-top: 120px;
    margin-bottom: 320px;
    @media (max-width: 1719px) {
      margin-bottom: 40px;
    }
    &__head {
      font-size: 36px;
      font-family: "PT Serif", serif;
      font-weight: 700;
      color: #cbb073;
      text-align: center;
      margin-bottom: 25px;
    }
    &__text {
      max-width: 580px;
      margin: 0 auto;
      text-align: center;
      margin-bottom: 50px;
    }
    &__name {
      font-size: 30px;
      font-family: "PT Serif", serif;
      font-weight: 700;
      color: #cbb073;
      margin-bottom: 50px;
      @media (max-width: 575px) {
        font-size: 24px;
      }
    }
    &__head2 {
      font-family: "PT Serif", serif;
      font-weight: 700;
    }
    &__line {
      background: url("../assets/images/stripe.png") center no-repeat;
      height: 46px;
      background-size: contain;
    }
    &__list {
      margin-bottom: 75px;
    }
    &__item {
      &:not(:last-child) {
        margin-bottom: 75px;
      }
    }
    &__stories-box {
      margin-top: 75px;
    }
  }
</style>