export interface IChat {
  timestamp: number;
  prompt: string;
  isUserPrompt: boolean;
  shouldRetry?: boolean;
}

export const ChatsMock: IChat[] = [
  {
    timestamp: 1,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: false,
    shouldRetry: false,
  },
  {
    timestamp: 2,
    prompt: "Lorem ipsum dolor sit amet.",
    isUserPrompt: true,
    shouldRetry: true,
  },
  /*{
    timestamp: 3,
    prompt:
      "Lorem ipsum is a popular template filler in the dev world. Do you want me to share more information?",
    isUserPrompt: false,
  },
  {
    timestamp: 4,
    prompt: "No thank you. How about let's talk about financial crimes?",
    isUserPrompt: true,
  },
  {
    timestamp: 5,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: false,
  },
  {
    timestamp: 6,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: true,
  },
  {
    timestamp: 7,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: false,
  },
  {
    timestamp: 8,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: true,
  },
  {
    timestamp: 9,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: false,
  },
  {
    timestamp: 10,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: true,
  },
  {
    timestamp: 11,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: false,
  },
  {
    timestamp: 12,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: true,
  },
  {
    timestamp: 13,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: false,
  },
  {
    timestamp: 14,
    prompt: "Welcome to Danske bank. How can I help you today?",
    isUserPrompt: true,
  },
  {
    timestamp: 15,
    prompt: "Welcome to Danske bank. How can I help you today??",
    isUserPrompt: false,
  },
  {
    timestamp: 16,
    prompt: "Welcome to Danske bank. How can I help you today???",
    isUserPrompt: true,
  },*/
];
