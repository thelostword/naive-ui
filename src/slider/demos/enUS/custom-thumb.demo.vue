<markdown>
# Customize handle

You can use `handle` slot to customize handle button.
</markdown>

<script lang="ts" setup>
import AnimalCat24Regular from '@vicons/fluent/AnimalCat24Regular'
import { ref } from 'vue'

const value = ref(50)
</script>

<template>
  <n-space vertical>
    <n-slider v-model:value="value" :step="10">
      <template #thumb>
        <n-icon-wrapper :size="24" :border-radius="12">
          <n-icon :size="18" :component="AnimalCat24Regular" />
        </n-icon-wrapper>
      </template>
    </n-slider>
    <n-input-number v-model:value="value" size="small" />
  </n-space>
</template>
