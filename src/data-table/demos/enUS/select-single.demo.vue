<markdown>
# Single selection

Set `multiple: false` to make the column of `type='selection` a single selection mode.
</markdown>

<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const data = Array.from({ length: 46 }).map((_, index) => ({
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
  key: index
}))

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection',
      multiple: false,
      disabled(row: RowData) {
        return row.name === 'Edward King 3'
      }
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    }
  ]
}

const checkedRowKeysRef = ref([4, 1])
const columns = createColumns()
const pagination = {
  pageSize: 6
}
</script>

<template>
  <n-data-table
    v-model:checked-row-keys="checkedRowKeysRef"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>
