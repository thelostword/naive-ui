<markdown>
  # 基础用法
</markdown>

<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <div style="height: 200px; transform: translate(0)">
    <n-float-button :right="0" :bottom="0" shape="square">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
    <n-float-button :left="0" :bottom="0" shape="square" type="primary">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
    <n-float-button :right="0" :top="0">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
    <n-float-button :left="0" :top="0" type="primary">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
  </div>
</template>
