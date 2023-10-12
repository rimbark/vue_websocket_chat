import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
import { IChannel } from "../types/channels.types.ts"
import { IMessage } from "../types/messages.types.ts"
import { useRoute } from "vue-router"

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

export const useChatService = defineStore('chat', () => {
  const route = useRoute()

  const channels = ref<IChannel[]>([
    { id: '1', title: 'TeamSnack', messages: Array.from({ length: 5 }, createMessage), checked: false },
    { id: '2', title: 'zede vue', messages: Array.from({ length: 3 }, createMessage), checked: false },
    { id: '3', title: 'some chat', messages: Array.from({ length: 1 }, createMessage), checked: false },
  ])

  const activeChannel = computed(() => {
    const paramId = route.meta.chatParamId
    if (!paramId) {
      return undefined
    }
    return channels.value.find(channel => channel.id === route.params?.[paramId])
  })

  const messages = computed(() => activeChannel.value?.messages || [])

  async function addMessage(text: string) {
    const message: IMessage | null = reactive(createMessage(text))
    messages.value.push(message)
  }

  return {
    messages,
    addMessage,
    channels,
    activeChannel
  }
})