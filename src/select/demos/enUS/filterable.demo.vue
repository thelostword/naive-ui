<markdown>
# Filterable

Go go go, Filter.
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

const selectedValue = ref(null)
const selectedValues = ref(null)
const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      v-model:value="selectedValue"
      filterable
      placeholder="Please select a song"
      :options="options"
    />
    <n-select
      v-model:value="selectedValues"
      multiple
      filterable
      placeholder="Please Select Songs"
      :options="options"
    />
  </n-space>
</template>
