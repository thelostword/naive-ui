<markdown>
# 手风琴

像一个手风琴。使用 `accordion` 属性对一级菜单使用该模式。
</markdown>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import {
  BagOutline as BagOutlineIcon,
  FishOutline as FishIcon,
  PawOutline as PawIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: renderIcon(FishIcon),
    children: [
      {
        label: '红烧',
        key: 'braise',
        children: [
          {
            label: '加辣',
            key: 'spicy'
          }
        ]
      },
      {
        label: '清蒸',
        key: 'steamed',
        children: [
          {
            label: '不要葱',
            key: 'no-green-onion'
          }
        ]
      }
    ]
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: renderIcon(PawIcon),
    children: [
      {
        label: '保护野生动物',
        key: 'protect-wild-animals'
      }
    ]
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not'
      }
    ]
  }
]

const defaultExpandedKeys = ['fish', 'braise']
</script>

<template>
  <n-menu
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    accordion
  />
</template>
