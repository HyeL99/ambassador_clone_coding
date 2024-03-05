<template>
  <div id="slideImageContainer">
    <img v-for="(item, i) in images" :key="i" :src="item.img" :alt="item.alt" />
    <div class="dots">
      <span v-for="(item, i) in images" :key="i">O</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideImage",
  props: {
    images: Array,
  },
};
</script>
