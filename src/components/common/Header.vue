<template>
  <header>
    <button @click="openSideBar">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <a href="/" class="logo">
      <img :src="require('@/assets/img/logo.png')" alt="앰배서더 호텔 그룹" />
    </a>
    <a href="/reservation" class="reservation">
      {{ $t("label.book") }}
      <span class="arrow"></span>
    </a>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    openSideBar() {
      this.$store.commit("menuStore/setOpened", true);
    },
  },
};
</script>
