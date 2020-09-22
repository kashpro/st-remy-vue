<template>
  <div class="carousel js-header-carousel" ref="carousel">
    <img src="@/assets/images/carousel-01.jpg">
    <img src="@/assets/images/carousel-02.jpg">
    <img src="@/assets/images/carousel-03.jpg">
    <img src="@/assets/images/carousel-04.jpg">
    <img src="@/assets/images/carousel-05.jpg">
    <img src="@/assets/images/carousel-06.jpg">
    <img src="@/assets/images/carousel-07.jpg">
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
  }
</style>