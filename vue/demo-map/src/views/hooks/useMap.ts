import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import mapconfig from "./useMapConfig";
import { getLocalPosition } from './useLocal'
import { ref } from 'vue'


export default function useMap() {
  const map = ref()

  async function initMap() {
    const position = await getLocalPosition()
    console.log('initMap', position)

    map.value = new Map({
      // layers: [mapconfig.streetmap(), vectorLayer],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // vectorLayer
      ],
      target: "map",
      view: new View({
        maxZoom: 18,
        center: fromLonLat(position),
        zoom: 15,
      }),
    });
  }

  return { map, initMap }
}