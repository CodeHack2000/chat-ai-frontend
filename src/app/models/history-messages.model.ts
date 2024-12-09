export interface ApiHistoryResponse {
  id: number;
  userId: string;
  userMessage: string;
  botMessage: string;
  createdAt: Date;
  updatedAt: Date;
  recommendedProducts: string;
}

export interface UserHistory {
  userMessage: string;
  botMessage: string;
  recommendedProducts: string;
}

export interface UserHistoryByDate {
  date: Date;
  messages: UserHistory[];
}

export interface UserHistoryMessages {
  userId: string;
  messages: UserHistoryByDate[];
  lastUpdate: Date;
}
