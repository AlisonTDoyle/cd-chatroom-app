import { Sender } from "./sender"

export interface Message {
  chatroomId?: number
  senderId: number
  sender?: Sender
  timestamp:Date
  image?: {
    url: string
  } | null
  message: string
}