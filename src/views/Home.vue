<template>
  <main class="home">
    <Carousel
      :id="'mainCarousel'"
      :key="locale"
      :delay="4000"
      :images="
        locale === 'ko_KR'
          ? ko_KR_mainList
          : locale === 'en_US'
          ? en_US_mainList
          : []
      "
    />
    <ReservationCard />
    <Carousel
      v-if="locale === 'ko_KR'"
      :id="'bannerCarousel'"
      :images="banners"
      :delay="4000"
    />

  </main>
</template>

<script>
import Carousel from "@/components/common/Carousel.vue";
import { mapState } from "vuex";
import ReservationCard from "@/components/ReservationCard.vue";

export default {
  name: "Home",
  components: { ReservationCard, Carousel },
  data() {
    return {
      ko_KR_mainList: [
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202401/NAG__20240105110524.jpg",
          title: "",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202312/750_520_20231221091459.jpg",
          title: "",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202312/nag_mo_20231211140145.jpg",
          title: "",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202310/iam_mo_20231030110609.png",
          title: "",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202310/IAI_mo_750x520_20231006172053.jpg",
          title: "",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202312/750.390_20231226145822.png",
          title: "",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202312/750.390_20231226145902.png",
          title: "",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202401/Gran-a_mo_20240105110455.jpg",
          title: "",
        },
      ],
      en_US_mainList: [
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202202/m_20220218132821.jpg",
          title: "The Ambassador Seoul - A Pullman",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202204/lobbybar2_20220412180059.png",
          title: "Fairmont Ambassador Seoul",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202107/33_m_20210715173508.png",
          title: "Gyeong-Won-Jae Ambassador Incheon",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202107/22_m_20210715171506.png",
          title: "Mercure Ambassador Jeju",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202012/main02_m_20201224174605.png",
          title: "Mondrian Seoul Itaewon",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202009/222222_20200925092838.png",
          title: "Mercure Ambassador Seoul Hongdae",
        },
        {
          link: "",
          url: "https://m.ambatel.com/RES/PRODUCT/202107/11_m_20210715171425.png",
          title: "Sofitel Ambassador Seoul Hotel",
        },
      ],
      banners: [
        {
          img: require("@/assets/img/banner_01.png"),
          alt: "앰배서더 아카데미",
        },
        { img: require("@/assets/img/banner_02.png"), alt: "객실 패키지" },
        {
          img: require("@/assets/img/banner_03.png"),
          alt: "이벤트 & 프로모션",
        },
      ],
    };
  },
  computed: {
    ...mapState(["locale"]),
  },
};
</script>
