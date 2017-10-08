export type ChatbotSources = 'user' | 'bot'

export interface  ChatbotMessage {
    source: ChatbotSources;
    message: string;
    conversationId?: string;
}