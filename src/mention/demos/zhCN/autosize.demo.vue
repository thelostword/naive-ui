<markdown>
# 自动换行
</markdown>

<script lang="ts" setup>
const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: '广东路',
    value: '广东路'
  },
  {
    label: '颐和园路5号',
    value: '颐和园路5号'
  }
]
</script>

<template>
  <n-mention type="textarea" :options="options" autosize />
</template>
