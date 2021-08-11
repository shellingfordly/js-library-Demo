import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import { Vector as SourceVec } from 'ol/source'
import { Style, Icon } from 'ol/style'
import LayerVec from 'ol/layer/Vector'


export async function addIconMarker(map) {

  const position = await getLocalPosition()
  console.log('addIconMarker', position)

  // 创建矢量容器
  var vectorSource = new SourceVec({})
  //创建图标特性
  var iconFeature = new Feature({
    geometry: new Point(position)
  })

  //将图标特性添加进矢量中
  vectorSource.addFeature(iconFeature)
  //创建图标样式
  var iconStyle = new Style({
    image: new Icon({
      opacity: 1,
      src: "/local.svg",
      // imgSize:20
    })
  })
  //创建矢量层
  var vectorLayer = new LayerVec({
    source: vectorSource,
    style: iconStyle
  });
  //添加进map
  map.addLayer(vectorLayer);
}



export function getLocalPosition() {
  const localPosition = [37.41, 8.82]
  return new Promise((res) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { longitude, latitude } = position.coords
      if (longitude) localPosition[0] = longitude // 经度
      if (latitude) localPosition[1] = latitude // 维度
      res(localPosition)
    });
  })
}