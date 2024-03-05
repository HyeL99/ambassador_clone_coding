<template>
  <footer class="footerWrap">
    <div class="footerContents">
      <template
        v-for="(item, i) in Object.keys($i18n.messages.ko_KR.content.footer)"
      >
        <span :key="i" v-if="i !== 0"></span>
        {{ $t(`content.footer.${item}`) }}
      </template>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
