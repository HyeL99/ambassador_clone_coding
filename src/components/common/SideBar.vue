<template>
  <div :class="`blurredContainer${isOpened ? ' opened' : ''}`">
    <div :class="`sidebar${isOpened ? ' opened' : ''}`">
      <div class="top">
        <div class="gridBox">
          <a href="/" class="homeButton">홈</a>
          <a href="/myPage" class="myButton">마이페이지</a>
          <button @click="closeSideBar" :class="`${isOpened ? 'opened' : ''}`">
            <span>닫기</span>
          </button>
        </div>
        <p>
          <template v-if="locale === 'en_US'">
            {{ $t("message.sevNbef") }}
          </template>
          <a href="/login">{{ $t("label.login") }}</a>
          <template v-if="locale === 'ko_KR'">
            <template v-for="(txt, i) in $t('message.sevNbef').split('\n')">
              <br v-if="i !== 0" :key="i" />{{ txt }}
            </template>
          </template>
        </p>
        <div class="links">
          <a href="/confirm" class="homeButton">{{ $t("label.bookStat") }}</a>
          <a href="/signup" class="myButton">{{ $t("label.reg") }}</a>
        </div>
      </div>
      <div class="middle">
        <ul class="nav">
          <li v-for="(item, i) in menu" :key="`menu_${i}`" class="menus">
            <a v-if="item.isLink === 'Y'" :href="item.link">
              <span class="menuLabel">{{ $t(`label.${item.label}`) }}</span>
              <span class="arrow">이동하기</span>
            </a>
            <template v-else>
              <a :href="item.link" @click="setOpenState($event, item.label)">
                <span class="menuLabel">{{ $t(`label.${item.label}`) }}</span>
                <span
                  :class="`viewMore${isMenuOpen[item.label] ? ' active' : ''}`"
                >
                  더보기
                </span>
              </a>
              <ul
                :class="`subMenus ${item.label}${
                  isMenuOpen[item.label] ? ' active' : ''
                }`"
              >
                <li v-for="(subItem, i) in item.subMenus" :key="`submenu_${i}`">
                  <a :href="subItem.link">{{ $t(`label.${subItem.label}`) }}</a>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <div class="links">
          <button @click="setLocale('ko')">{{ $t("label.ko") }}</button>
          <button @click="setLocale('en')">English</button>
          <button>{{ $t("label.fb") }}</button>
        </div>
      </div>
      <div class="bottom footerWrap">
        <div class="links">
          <template v-if="locale === 'ko_KR'">
            <button>{{ $t("label.policy") }}</button>
            <button>{{ $t("label.mbrshTerms") }}</button>
          </template>
          <template v-if="locale === 'en_US'">
            <button class="enBtn">{{ $t("label.policyNterms") }}</button>
          </template>
        </div>
        <div class="footerContents">
          <template
            v-for="(item, i) in Object.keys(
              $i18n.messages.ko_KR.content.footer
            )"
          >
            <span :key="i" v-if="i !== 0"></span>
            {{ $t(`content.footer.${item}`) }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideBar",
  data() {
    return {
      isMenuOpen: {
        spcOfr: true,
        mbrsh: false,
      },
    };
  },
  computed: {
    ...mapState("menuStore", ["menu", "isOpened"]),
    ...mapState(["locale"]),
  },
  methods: {
    setLocale(lang) {
      switch (lang) {
        case "ko":
          this.$i18n.locale = "ko_KR";
          this.$store.commit("setLocale", "ko_KR");
          break;
        case "en":
          this.$i18n.locale = "en_US";
          this.$store.commit("setLocale", "en_US");
          break;
      }
    },
    setOpenState(e, type) {
      e.preventDefault(); // 링크 이동 방지
      this.isMenuOpen[type] = !this.isMenuOpen[type];
    },
    closeSideBar() {
      this.$store.commit("menuStore/setOpened", false);
    },
  },
};
</script>
