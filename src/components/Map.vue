<template>
  <div id="map">
    <GmapMap
      :options="mapOptions"
      :center="mapCenter"
      :zoom="17"
      style="width: 100vw; height: 700px"
    >
      <GmapInfoWindow
        :options="infoOptions"
        :position="infoPosition"
        :oppened="infoOpened"
        :key="infoOpened"
        @closeclick="infoOpened = false"
      >
        {{ infoContent }}
      </GmapInfoWindow>
      <GmapMarker
        v-for="(b, i) in brands"
        :key="`bMarker_${i}`"
        :position="{ lat: b.lat, lng: b.lng }"
        :clickable="true"
        :draggable="true"
        @click="toggleInfo(b, i)"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Map",
  map: null,
  data() {
    return {
      mapOptions: {
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false,
      },
      mapCenter: {
        lat: 35.105696,
        lng: 129.042857,
      },
      brands: [
        {
          label: "호텔1",
          lat: 35.106187,
          lng: 129.042943,
          content: "호텔 세부내역-1",
        },
        {
          label: "호텔2",
          lat: 35.105556,
          lng: 129.04393,
          content: "호텔 세부내역-2",
        },
      ],
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  methods: {
    toggleInfo(item, index) {
      this.mapCenter = { lat: item.lat, lng: item.lng };
      this.infoPosition = this.mapCenter;

      this.infoContent = item.content;
      console.log(this.infoCurrentKey === index, this.infoOpened);
      if (this.infoCurrentKey === index) {
        this.infoOpened = !this.infoOpened;
        console.log(this.infoOpened);
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = index;
      }
    },
  },
};
</script>
