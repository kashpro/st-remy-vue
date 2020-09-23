<template>
  <div class="start">
    <div class="container start__container">
      <div class="start__icon"><span>18+</span></div>
      <h1 class="start__head">Привет!</h1>
      <span class="start__subhead">Для доступа необходимо подтвердить возраст.*</span>
      <span class="start__text">Дата рождения:</span>
      <form class="start__form" @submit.prevent="checkAge">
        <input type="date" class="start__input" v-model="age">
        <Button type="submit" class="start__btn">Перейти на сайт</Button>
      </form>
      
      <div class="start__note">*Сайт содержит информацию для лиц совершеннолетнего возраста. Сведения, размещенные на сайте, не являются рекламой, носят исключительно информационный и развлекательный характер, и предназначены только для личного использования.</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        age: "2000-01-01",
      };
    },
  methods: {
    checkAge() {
      const date1 = Date.now();
      const date2 = new Date(this.age).getTime();
      const diff = date1 - date2;
      const year18InMs = 1000 * 60 * 60 * 24 * 365 * 18;
      // const diffTime = new Date(diff);
      // const diffYear = diffTime.getFullYear();
      // const initYear = new Date(0).getFullYear();
      // const years = diffYear - initYear;
      if (diff >= year18InMs) {
        this.$router.push("/");
        localStorage.setItem("agePass", true);
      } else {
        this.$store.dispatch("openModal", {
          type: "Message",
          data: this.$messages.YOUNG_ACCESS_DENIED_MESSAGE,
        });
      }
    }
  }
}
</script>

<style lang="scss">
  .start {
    background: url("../assets/images/bg-01.jpg") center no-repeat;
    background-size: cover;
    height: 100vh;
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    &__icon {
      margin-top: auto;
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 30px;
      color: #d0b780;
      width: 85px;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 2px solid #d0b780;
      margin-bottom: 35px;
    }
    &__head {
      font-family: "PT Serif", serif;
      font-weight: 700;
      font-size: 48px;
      margin-bottom: 35px;
    }
    &__subhead {
      font-size: 24px;
      margin-bottom: 35px;
    }
    &__text {
      margin: 15px;
    }
    &__note {
      margin-top: auto;
      font-size: 14px;
      opacity: 0.7;
      max-width: 930px;
      text-align: center;
      margin-bottom: 50px;
    }
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__input {
      padding: 12px 10px 12px 18px;
      border: 1px solid #cdb66b;
      border-radius: 5px;
      background-color: transparent;
      color: #ffffff;
      margin-bottom: 35px;
      &::placeholder {
        color: rgba(#ffffff, 0.5);
      }
    }
    // &__btn {
    //   &[disabled] {
    //     color: #000000;
    //     cursor: default;
    //   }
    // }
  }
</style>