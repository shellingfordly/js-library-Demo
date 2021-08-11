<template>
  <div class="map" id="map" ref="mapRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import "ol/ol.css";
import useMap from "./hooks/useMap";
import { addIconMarker } from "./hooks/useLocal";

export default defineComponent({
  setup() {
    const mapRef = ref();
    const { map, initMap } = useMap();

    onMounted(async () => {
      await initMap();
      await addIconMarker(map.value);
    });

    return {
      mapRef,
    };
  },
});
</script>

<style>
#map {
  height: 720px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: #1f3064;
}
</style>
