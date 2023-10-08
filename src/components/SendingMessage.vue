<script lang="ts" setup="">
import {ref} from "vue"
import {useMessageService} from "../modules/messageService.ts"

const {addMessage} = useMessageService()
const text = ref('')
const senMessage = () => {
  addMessage(text.value)
  text.value = ''
}
</script>

<template>
  <div>
    <input
      v-model="text"
      type="text"
    >
    <button @click="senMessage">
      Send message
    </button>
  </div>
</template>

<style scoped>

</style>