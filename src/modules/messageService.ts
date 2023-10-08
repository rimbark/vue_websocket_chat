import {defineStore} from "pinia";
import {IMessage} from "../types/messages.types.ts";
import {ref} from "vue";

let id = 0

function createMessage(): IMessage {
  return {
    id: ++id,
    userId: Math.random(),
    title: Math.random().toString(),
    completed: false
  }
}

export const useMessageService = defineStore('chat', () => {
  const messages = ref<IMessage[]>(Array.from({length: 2}, createMessage))

  async function addMessage() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    messages.value.push(createMessage())
  }

  return {
    messages,
    addMessage
  }
})