<markdown>
# Size

Date Picker can be `small`, `medium` or `large` sized.
</markdown>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      timestamp: ref(null)
    }
  }
})
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="timestamp" size="small" type="date" />
    <n-date-picker v-model:value="timestamp" size="medium" type="date" />
    <n-date-picker v-model:value="timestamp" size="large" type="date" />
  </n-space>
</template>
