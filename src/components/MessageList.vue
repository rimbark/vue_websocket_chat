<script lang="ts" setup>
import { useMessageService } from "../modules/messageService.ts"

const { messages } = useMessageService ()
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