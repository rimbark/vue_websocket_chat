import { IMessage } from "./messages.types.ts"

export interface IChannel {
  id: string
  title: string
  messages: IMessage[]
  checked: boolean
}