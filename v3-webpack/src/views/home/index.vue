<script setup lang="ts">
import { Plot } from '@int/geotoolkit/plot/Plot'
import { WellLogWidget } from '@int/geotoolkit/welllog/widgets/WellLogWidget'
import { TrackType } from '@int/geotoolkit/welllog/TrackType'
import { HeaderType } from '@int/geotoolkit/welllog/header/LogAxisVisualHeader'

import { createCurve } from './curveData'

function createScene(canvas: HTMLCanvasElement): {
  plot: Plot
  widget: WellLogWidget
} {
  const widget = new WellLogWidget({
    horizontalscrollable: false,
    verticalscrollable: true,
    tools: {
      cursortracking: {
        tooltip: {
          enabled: true
        }
      }
    }
  }).setAxisHeaderType(HeaderType.Simple)

  widget.addTrack(TrackType.IndexTrack)
  widget
    .addTrack(TrackType.LinearTrack)
    .addChild([createCurve(4500, 10, 'GR', '#7cb342'), createCurve(4500, 10, 'CALI', '#ef6c00')])

  widget.setHeaderHeight('auto')

  return {
    plot: new Plot({
      canvaselement: canvas,
      root: widget
    }),
    widget: widget
  }
}

function zoomIn(widget: WellLogWidget) {
  widget.scale(5 / 4)
}

function zoomOut(widget: WellLogWidget) {
  widget.scale(4 / 5)
}

function fitToHeight(widget: WellLogWidget) {
  widget.fitToHeight()
}
const plot = ref()
onMounted(() => {
  createScene(plot.value)
})
</script>

<template>
  <canvas ref="plot" width="800" height="400" />
</template>

<style scoped lang="less">
.index-wrapper {
  height: 200px;
}
</style>
