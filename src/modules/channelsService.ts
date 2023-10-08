import {defineStore} from "pinia"
import {IChannel} from "../types/channels.types.ts"
import {ref} from "vue"

let id = 0

function createChannel(): IChannel {
  return {
    id: ++id,
    title: Math.random().toString(),
    checked: false
  }
}

export const useChannelsService = defineStore('channel', () => {
  const channels = ref<IChannel[]>(Array.from({length: 5}, createChannel))
  return {
    channels
  }
})