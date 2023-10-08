<script lang="ts" setup>
import {useMessageService} from "../modules/messageService.ts";

const {messages} = useMessageService()
</script>

<template>
  <div
    v-for="message in messages"
    :key="message.id"
  >
    {{ message.title }}
  </div>
</template>

<style lang="scss" scoped>

</style>