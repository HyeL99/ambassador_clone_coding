<template>
  <div id="resvCard">
    <div class="tabContainer">
      <div class="tabs">
        <button
          :class="`tabButton${tabIndex === '0' ? ' active' : ''}`"
          @click="tabIndex = '0'"
        >
          {{ $t("label.rmNpk") }}
        </button>
        <button
          :class="`tabButton${tabIndex === '1' ? ' active' : ''}`"
          @click="tabIndex = '1'"
        >
          {{ $t("label.dining") }}
        </button>
      </div>
      <div class="tabContents" v-if="tabIndex === '0'">
        <HotelSrchInput
          :index="tabIndex"
          :input-value="inputHotelValue_0"
          @setInput="setInput"
        />
        <div class="formBox">
          <div class="left">
            <div class="contents">
              <span class="conTitle">체크인</span>
              <div class="date">
                <span>2024.<br />02.</span>
                <span class="num">22</span>
              </div>
            </div>
            <div class="contents">
              <span class="conTitle">체크아웃</span>
              <div class="date">
                <span>2024.<br />02.</span>
                <span class="num">24</span>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="contents">
              <span class="conTitle">객실</span>
              <div class="num">1</div>
            </div>
            <div class="contents">
              <span class="conTitle">성인</span>
              <div class="num">2</div>
            </div>
            <div class="contents">
              <span class="conTitle">어린이</span>
              <div class="num">0</div>
            </div>
          </div>
        </div>
        <div class="radios">
          <div
            v-for="(item, index) in $i18n.locale === 'ko_KR'
              ? rsvOp.ko
              : rsvOp.en"
            :key="index"
          >
            <input
              type="radio"
              name="rsvOp"
              :id="`radio_${index}`"
              :key="`radio_${index}`"
              :value="index"
              v-model="rsvOp.key"
            />
            <label
              :for="`radio_${index}`"
              :key="`label_${index}`"
              :class="rsvOp.key === index ? 'active' : ''"
            >
              <span></span>
              <span>{{ $t(`label.${item.srchKey}`) }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="tabContents" v-if="tabIndex === '1'">
        <HotelSrchInput
          :index="tabIndex"
          :input-value="inputHotelValue_1"
          @setInput="setInput"
        />
        <div class="formBox">
          <div class="left rest">
            <div class="contents">
              <span class="conTitle">예약일</span>
              <div class="rsvDate">
                <span class="num">2024.02.06</span>
              </div>
            </div>
          </div>
          <div class="right rest">
            <div class="contents">
              <span class="conTitle">성인</span>
              <div class="num">2</div>
            </div>
            <div class="contents">
              <span class="conTitle">어린이</span>
              <div class="num">0</div>
            </div>
          </div>
        </div>
      </div>
      <button class="srchBtn">{{ $t("label.srch") }}</button>
    </div>
    <span v-if="tabIndex === '1'" class="emp"></span>
    <div class="loginBnf">
      <p>{{ $t("message.spcBnfAmbOnly") }}</p>
      <a href="/login">{{ $t("label.login") }}</a>
      <a href="/signup">{{ $t("label.reg") }}</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HotelSrchInput from "@/components/HotelSrchInput.vue";

export default {
  name: "ReservationCard",
  components: { HotelSrchInput },
  data() {
    return {
      tabIndex: "0",
      inputHotelValue_0: "",
      inputHotelValue_1: "",
      rsvOp: {
        ko: [
          { srchKey: "freeTicket" },
          { srchKey: "copResv" },
          { srchKey: "promCode" },
        ],
        en: [{ srchKey: "copResv" }, { srchKey: "promCode" }],
        key: "",
      },
    };
  },
  computed: {
    ...mapState("menuStore", ["hotels"]),
  },
  methods: {
    setInput(index, value) {
      console.log("afsd", index, value);
      switch (index) {
        case "0":
          this.inputHotelValue_0 = value;
          break;
        case "1":
          this.inputHotelValue_1 = value;
          break;
      }
    },
  },
};
</script>
