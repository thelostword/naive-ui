<markdown>
# 页面槽位

分页有一个属性 `page-slot`，试一下你就能理解它在做什么了。这个概念主要是为了解决由于分页长度变化导致的误点击问题。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
</script>

<template>
  <n-space vertical>
    <n-pagination v-model:page="page" :page-count="100" />
    <n-pagination v-model:page="page" :page-count="100" :page-slot="8" />
    <n-pagination v-model:page="page" :page-count="100" :page-slot="7" />
  </n-space>
</template>
