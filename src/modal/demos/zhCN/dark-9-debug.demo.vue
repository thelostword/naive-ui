<markdown>
# pop debug 4
</markdown>

<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { repeat } from 'seemly'
import { computed, h } from 'vue'

const columns: DataTableColumns<{
  key: number
  name: string
  age: number
  address: string
}> = [
  {
    type: 'selection',
    disabled(row) {
      return row.name === 'Edward King 3'
    },
    fixed: 'left'
  },
  {
    title: 'Name',
    key: 'name',
    width: 200,
    fixed: 'left',
    filter: 'default',
    filterOptions: [
      {
        label: 'Edward King 0',
        value: 'Edward King 0'
      },
      {
        label: 'Edward King 1',
        value: 'Edward King 1'
      },
      {
        label: 'Edward King 2',
        value: 'Edward King 2'
      },
      {
        label: 'Edward King 3',
        value: 'Edward King 3'
      }
    ]
  },
  {
    fixed: 'left',
    title: 'Age',
    key: 'age',
    width: 100
  },
  {
    title: 'Row',
    key: 'row',
    render(row, index) {
      return h('span', ['row ', index])
    }
  },
  {
    title: 'Row1',
    key: 'row1',
    render(row, index) {
      return h('span', ['row ', index])
    }
  },
  {
    title: 'Row2',
    key: 'row2',
    render(row, index) {
      return h('span', ['row ', index])
    }
  },
  {
    title: 'Address',
    key: 'address',
    width: 200,
    fixed: 'right'
  }
]

const data = repeat(46, undefined).map((_, index) => ({
  key: index,
  name: `Edward King ${index % 4}`,
  age: 32 + (index % 3),
  address: `London, Park Lane no. ${index}`
}))

const pagination = computed(() => {
  return { pageSize: 10 }
})
</script>

<template>
  <n-popover trigger="click" :width="600">
    <template #trigger>
      <n-button>Toggle</n-button>
    </template>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :max-height="250"
      :scroll-x="1800"
    />
  </n-popover>
</template>
