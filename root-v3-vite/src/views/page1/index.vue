<script setup lang="ts">
import config from '../config'
</script>

<template>
  <div class="index-wrapper">
    <micro-app
      name="micro-children1"
      keep-alive
      :url="`${config.children1}/micro-children1/#/home`"
    ></micro-app>
  </div>
</template>

<style scoped lang="less">
.index-wrapper {
  height: 100%;
}
</style>
