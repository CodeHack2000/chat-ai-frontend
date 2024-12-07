export interface Message {
  id: `${string}-${string}-${string}-${string}-${string}`;
  userMessage: string;
  botMessage: string;
}

export interface ChatMessage {
  userId: string;
  messages: Message[];
}
