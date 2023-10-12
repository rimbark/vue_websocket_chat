<script lang="ts" setup>

import { toRefs } from "vue"
import { useChatService } from "../stores/messageService.ts"

const { messages } = toRefs(useChatService())
</script>

<template>
  <div class="messageField">
    <div
      v-for="message in messages"
      :key="message.id"
    >
      {{ message.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/style";

.messageField {
  @include displayColumn;
  align-items: flex-end;
}
</style>