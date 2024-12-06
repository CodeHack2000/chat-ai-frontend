export interface Message {
  id: number;
  userMessage: string;
  botMessage: string;
}

export interface ChatMessage {
  userId: string;
  messages: Message[];
}
