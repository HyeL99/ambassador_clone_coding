<template>
  <div class="carousel h-65">
    <div class="carouselContainer" :id="id">
      <div
        v-for="(item, i) in [...images, images[0]]"
        :key="i"
        class="carouselContent"
      >
        <a :href="item.link">
          <img :src="item.url || item.img" :alt="item.title || item.alt" />
        </a>
      </div>
    </div>
    <!--<div id="carouselHandler">-->
    <!--  <button v-if="isWorking === 'Y'" @click="setCarousel('N')">stop</button>-->
    <!--  <button v-else @click="setCarousel('Y')">start</button>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    id: String,
    images: Array,
    delay: Number,
  },
  data() {
    return {
      carouselList: [],
      carouselIndex: 0,
      isWorking: "N",
      carousel: null,
      $container: null,
    };
  },
  mounted() {
    clearInterval(this.carousel);
    this.$container = document.getElementById(this.id);
    this.setCarousel("Y");
  },
  methods: {
    setCarousel(mode) {
      mode === "Y" && this.moveLeft();
      // mode: 'Y'/'N'
      this.isWorking = mode;
      switch (mode) {
        case "Y":
          clearInterval(this.carousel);
          this.carousel = setInterval(() => {
            this.moveLeft();
          }, this.delay);
          break;
        case "N":
          clearInterval(this.carousel);
          this.isWorking = "N";
          break;
      }
    },
    moveLeft() {
      if (this.carouselIndex === this.images.length) {
        this.$container.style.left = `-${100 * this.carouselIndex}vw`;
        setTimeout(() => {
          this.$container.style.transition = "none";
          this.carouselIndex = 0;
          this.$container.style.left = `-${100 * this.carouselIndex}vw`;
          this.carouselIndex++;
        }, 500);
      } else if (this.carouselIndex === 1) {
        this.$container.style.transition = "left 0.5s ease-in-out";
        this.$container.style.left = `-${100 * this.carouselIndex}vw`;
        this.carouselIndex++;
      } else {
        this.$container.style.left = `-${100 * this.carouselIndex}vw`;
        this.carouselIndex++;
      }
    },
  },
};
</script>
