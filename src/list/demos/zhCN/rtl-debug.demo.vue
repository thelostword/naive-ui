<markdown>
# Rtl Debug
</markdown>

<script lang="ts" setup>
import { unstableListRtl } from 'naive-ui'
import { ref } from 'vue'

const rtlEnabled = ref(false)
const rtlStyles = [unstableListRtl]
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="rtlEnabled" />Rtl</n-space>
    <n-config-provider :rtl="rtlEnabled ? rtlStyles : undefined">
      <n-list bordered>
        <template #header>
          hhh
        </template>
        <template #footer>
          fff
        </template>
        <n-list-item>
          <template #prefix>
            <n-button>Prefix</n-button>
          </template>
          <template #suffix>
            <n-button>Suffix</n-button>
          </template>
          <n-thing title="Thing" title-extra="extra" description="description">
            Biu<br>
            Biu<br>
            Biu<br>
          </n-thing>
        </n-list-item>
        <n-list-item>
          <n-thing
            title="Thing"
            title-extra="extra"
            description="description"
          />
        </n-list-item>
      </n-list>
    </n-config-provider>
  </n-space>
</template>
