<markdown>
# 固定头部

在展示大量数据的时候通过设定 `max-height` 来固定头部、滚动数据。
</markdown>

<script lang="ts" setup>
const columns = [
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

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

const pagination = {
  pageSize: 15
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :max-height="250"
  />
</template>
