<markdown>
# 表头分组

注意：如果你希望分组的表头拥有固定列的效果，你需要给所有固定列表头都设定好宽度，包括所有的父级节点，否则可能产生错位。
</markdown>

<script lang="ts" setup>
import { ref } from 'vue'

function createCols() {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Attrs',
      key: 'attrs',
      children: [
        {
          title: 'Attack',
          key: 'attack',
          children: [
            {
              title: 'Physics Attack',
              key: 'physicsAttack'
            },
            {
              title: 'Magic Attack',
              key: 'magicAttack'
            }
          ]
        },
        {
          title: 'Defend',
          key: 'defend'
        },
        {
          title: 'Speed',
          key: 'speed'
        }
      ]
    }
  ]
}

function createData() {
  return Array.from({ length: 50 }).map((_, i) => {
    return {
      key: i,
      name: `name_${i}`,
      physicsAttack: `physicsAttack_${i}`,
      magicAttack: `magicAttack_${i}`,
      defend: `defend_${i}`,
      speed: `speed_${i}`
    }
  })
}

const data = ref(createData())
const columns = ref(createCols())
const pagination = ref({
  pageSize: 10
})
</script>

<template>
  <n-data-table
    :data="data"
    :columns="columns"
    :single-line="false"
    :pagination="pagination"
  />
</template>
