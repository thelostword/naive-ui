<markdown>
# 重置

青春是挽不回的水，转眼消失在指尖。
</markdown>

<script lang="ts" setup>
import type { CountdownInst } from 'naive-ui'
import { ref } from 'vue'

const active = ref(true)
const countdown = ref<CountdownInst | null>(null)

function handleReset() {
  countdown.value?.reset()
}
</script>

<template>
  <n-space>
    <span style="font-variant-numeric: tabular-nums">
      <n-countdown ref="countdown" :duration="86400000" :active="active" />
    </span>
    <n-button size="tiny" @click="handleReset">
      重置
    </n-button>
    <n-switch v-model:value="active" />
  </n-space>
</template>
