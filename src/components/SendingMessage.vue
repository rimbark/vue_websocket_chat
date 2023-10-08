<script lang="ts" setup="">
import { ref } from "vue"
import { useMessageService } from "../modules/messageService.ts"

const { addMessage } = useMessageService ()
const text = ref ('')
const senMessage = () => {
  addMessage (text.value)
  text.value = ''
}
</script>

<template>
  <div class="sendingContainer">
    <input
      v-model="text"
      type="text"
      class="messageInput"
    >
    <button @click="senMessage">
      Send message
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "src/style.scss";

.sendingContainer {
  @include displayRow;
  gap: 10px;

  width: 100%;
}

.messageInput {
  flex-grow: 1;
}
</style>