<template>
  <div class="modal" :class="{'modal--show': isModalOpen}" @click.self="closeModal"> <!-- белый туман -->
    <div class="modal__content"> <!-- черный прямоугольник -->
      <div class="modal__close" @click.self="closeModal"></div> <!-- Крестик -->
      <!-- тут различные компоненты: форма логина, форма реги, форма рестора, крупное сообщение, история из галереи -->
      <component :is="modalType"></component>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import RegisterForm from "@/components/RegisterForm.vue";
  import LoginForm from "@/components/LoginForm.vue";
  import RestoreForm from "@/components/RestoreForm.vue";
  import Story from "@/components/Story.vue";

  export default {
    components: {RegisterForm, LoginForm, RestoreForm, Story,},
    methods: {
      closeModal() {
        this.$store.dispatch("closeModal");
      },
      closeModalKeyboard(e) {
        if (e.code === "Escape" || e.keyCode === 27) { //e.keyCode - deprecated
          this.closeModal();
        }
      },
    },
    computed: {
      ...mapGetters(["isModalOpen", "modalType", "modalData"]),
    },
    watch: {
      isModalOpen() {
        if (this.isModalOpen) {
          window.addEventListener("keyup", this.closeModalKeyboard);
        } else {
          window.removeEventListener("keyup", this.closeModalKeyboard);
        }
      },
    },

  }
</script>

<style lang="scss">
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(#ffffff, 0.5);
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    &__content {
      transition: all 0.3s ease;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 40%;
      left: 50%;
      background-color: #000000;
      width: 900px;
      padding: 70px;
      border-radius: 5px;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.21), 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    }
    &__close {
      top: 40px;
      right: 40px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      position: absolute;
      &:before, &::after {
        transition: all 0.1s ease;
        position: absolute;
        display: block;
        content: "";
        width: 40px;
        height: 3px;
        background-color: #ffffff;
        border-radius: 1px;
        left: 50%;
        top: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:hover {
        &::before, &::after {
          background-color: #cbb073;
        }
      }
    }
    // &__head {
    //   text-align: center;
    //   font-family: "PT Serif", serif;
    //   font-weight: 700;
    //   font-size: 32px;
    //   color: #d0b87d;
    //   margin-bottom: 50px;
    // }
    // &__form {
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: space-between;
    //   margin-bottom: 25px;
    // }
    // &__link {
    //   transition: all 0.2s ease;
    //   text-decoration: underline;
    //   font-size: 14px;
    //   color: #959595;
    //   border: none;
    //   background: transparent;
    //   padding: 0;
    //   cursor: pointer;
    //   &:hover {
    //     color: #ffffff;
    //   }
    //   &--mr {
    //     margin-right: 15px;
    //   }
    // }
    // &__label {
    //   position: relative;
    //   display: flex;
    //   flex-direction: column;
    //   flex: 0 1 47%;
    //   font-size: 14px;
    // }
    // &__check-label {
    //   margin-bottom: 10px;
    //   line-height: 1;
    //   position: relative;
    //   margin-left: 24px;
    //   font-size: 14px;
    //   color: #959595;
    //   &::before{
    //     content: "";
    //     display: block;
    //     width: 16px;
    //     height: 16px;
    //     position: absolute;
    //     left: -24px;
    //     top: 0px;
    //     border: 1px solid rgba(#ffffff, 0.5);
    //   }
    //   &::after {
    //     content: "";
    //     display: block;
    //     width: 8px;
    //     height: 8px;
    //     position: absolute;
    //     left: -20px;
    //     top: 4px;
    //     background-color: #ffffff;
    //     transition: all 0.2s ease; 
    //     opacity: 0;
    //   }
    // }
    // &__input {
    //   background-color: transparent;
    //   border: none;
    //   border-bottom: 1px solid rgba(#ffffff, 0.5);
    //   color: rgba(#ffffff, 0.5);
    //   padding: 5px 0;
    //   font-size: 20px;
    //   margin-bottom: 25px;
    //   transition: all 0.3s ease;
    //   &:hover {
    //     border-bottom: 1px solid rgba(#ffffff, 1);
    //     color: rgba(#ffffff, 1);
    //   }
    //   &:focus {
    //     border-bottom: 1px solid rgba(#ffffff, 1);
    //     color: rgba(#ffffff, 1);
    //   }
    // }
    // &__check {
    //   cursor: pointer;
    //   &:checked + .modal__check-label::after{
    //     opacity: 1;
    //   }
    // }
    // &__box1 {
    //   flex: 0 1 47%;
    //   display: flex;
    //   flex-direction: column;
    // }
    // &__box2 {
    //   flex: 0 1 47%;
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   margin-top: 15px;
    // }
    // &__text {
    //   margin-bottom: 20px;
    // }
    // &__list {
    //   display: flex;
    // }
    &--show {
      opacity: 1;
      visibility: visible;
      .modal__content {
        top: 50%;
      }
    }
  }
</style>