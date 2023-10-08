import {defineStore} from "pinia"
import {IMessage} from "../types/messages.types.ts"
import {ref} from "vue"

let id = 0

function createMessage(inputText: string = Math.random().toString()): IMessage {
  const text = ref(inputText)
  return {
    id: ++id,
    userId: Math.random(),
    title: text.value,
    completed: false
  }
}

export const useMessageService = defineStore('chat', () => {
  const messages = ref<IMessage[]>(Array.from({length: 2}, createMessage))

  async function addMessage(text: string) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    messages.value.push(createMessage(text))
  }

  return {
    messages,
    addMessage
  }
})