<markdown>
# Size

A dropdown has different sizes.
</markdown>

<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const options = [
  {
    label: 'Jay Gatsby',
    key: 'jay gatsby'
  },
  {
    label: 'Daisy Buchanan',
    key: 'daisy buchanan'
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: 'Nick Carraway',
    key: 'nick carraway'
  },
  {
    label: 'Others',
    key: 'others1',
    children: [
      {
        label: 'Jordan Baker',
        key: 'jordan baker'
      },
      {
        label: 'Tom Buchanan',
        key: 'tom buchanan'
      },
      {
        label: 'Others',
        key: 'others2',
        children: [
          {
            label: 'Chicken',
            key: 'chicken'
          },
          {
            label: 'Beef',
            key: 'beef'
          }
        ]
      }
    ]
  }
]

const message = useMessage()
function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-space>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="small"
      :options="options"
      @select="handleSelect"
    >
      <n-button>Small</n-button>
    </n-dropdown>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="medium"
      :options="options"
      @select="handleSelect"
    >
      <n-button>Medium</n-button>
    </n-dropdown>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="large"
      :options="options"
      @select="handleSelect"
    >
      <n-button>Large</n-button>
    </n-dropdown>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="huge"
      :options="options"
      @select="handleSelect"
    >
      <n-button>Huge</n-button>
    </n-dropdown>
  </n-space>
</template>
