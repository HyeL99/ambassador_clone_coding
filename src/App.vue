<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <SideBar />
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Header from "@/components/common/Header.vue";
// eslint-disable-next-line no-unused-vars
import Footer from "@/components/common/Footer.vue";
// eslint-disable-next-line no-unused-vars
import SideBar from "@/components/common/SideBar.vue";
</script>

<style lang="scss">
@import "@/assets/style/main.scss";
</style>
