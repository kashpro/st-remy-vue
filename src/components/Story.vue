<template>
  <div class="story">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .story {
    display: flex;
    &__image {
      flex-shrink: 0;
      width: 500px;
      height: 500px;
      line-height: 0;
       border: 6px solid #cbb073;
       margin-right: 30px;
       &--wh400 {
        width: 400px;
        height: 400px;
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
    }
    &__text {
      font-size: 16px;
      flex-grow: 1;
      max-height: 249px;
      overflow-x: auto;
      margin-bottom: 20px;
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
      &:hover {
        .story__social {
          opacity: 1;
        }
      }
    }
    &__author {
      font-size: 16px;
    }
    &__date {
      font-size: 16px;
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