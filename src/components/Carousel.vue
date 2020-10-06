<template>
  <div class="carousel js-header-carousel" ref="carousel">
    <div class="carousel__img carousel__img--1"></div>
    <div class="carousel__img carousel__img--2"></div>
    <div class="carousel__img carousel__img--3"></div>
    <div class="carousel__img carousel__img--4"></div>
    <div class="carousel__img carousel__img--5"></div>
    <div class="carousel__img carousel__img--6"></div>
    <div class="carousel__img carousel__img--7"></div>
  </div>
</template>

<script>
  import $ from "jquery";
  import slick from "slick-carousel";

  export default {
    name: "Carousel",
    mounted() {
      const options = {
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 3000,
        infinite: true,
        slidesToShow: 1,
	      slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        accessibility: false,
      };
      $(this.$refs.carousel).slick(options);
    },
    beforeDestroy() {
      $(this.$refs.carousel).slick("unslick");
    }
  }
</script>

<style lang="scss">
  .carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      display: block;
      content: "";
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 7;
    }
    &__img {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      &--1 {background-image: url("../assets/images/carousel-01.jpg");}
      &--2 {background-image: url("../assets/images/carousel-02.jpg");}
      &--3 {background-image: url("../assets/images/carousel-03.jpg");}
      &--4 {background-image: url("../assets/images/carousel-04.jpg");}
      &--5 {background-image: url("../assets/images/carousel-05.jpg");}
      &--6 {background-image: url("../assets/images/carousel-06.jpg");}
      &--7 {background-image: url("../assets/images/carousel-07.jpg");}
    }
  }
  .slick-list, .slick-track, .slick-slide div {
		height: 100%;
	}
</style>