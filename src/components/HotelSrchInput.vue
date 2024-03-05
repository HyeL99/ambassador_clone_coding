<template>
  <div class="placeInput">
    <input
      type="text"
      :value="inputValue"
      :placeholder="$t('message.srchMsg')"
    />
    <button @click="openSelectBox">open</button>
    <ul v-if="openSelect">
      <li
        v-for="(item, i) in hotels"
        :key="i"
        @click="setInput($t(`hotelName.${item.srchKey}`))"
      >
        {{ $t(`hotelName.${item.srchKey}`) }} ({{
          $t(`hotelAddress.${item.srchKey}`)
        }})
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HotelSrchInput",
  props: {
    inputValue: String,
    index: String,
  },
  data() {
    return {
      openSelect: false,
    };
  },
  computed: {
    ...mapState("menuStore", ["hotels"]),
  },
  methods: {
    setInput(value) {
      this.openSelect = false;
      this.$emit("setInput", this.index, value);
    },
    openSelectBox() {
      this.$emit("setInput", this.index, "");
      this.openSelect = true;
    },
  },
};
</script>
