import "../assets/styles/_chat_bot.scss";
import { useEffect } from "react";
import ChatInput from "./ChatInput.tsx";
import Chats from "./Chats.tsx";
import { FaBeer } from "react-icons/fa";
import useAI from "../hooks/useAI.ts";
import { useAppDispatch } from "../hooks/useAppDispatch.ts";

const ChatBot = () => {
  useAI();
  const dispatch = useAppDispatch();
  // const useChats

  useEffect(() => {
    // dispatch(setChats(ChatsMock));
  }, [dispatch]);

  return (
    <div className="bot">
      <header className="chatbot-header">
        <div className="header-title">Chatbot</div>
        <div className="header-action">
          <FaBeer />
        </div>
      </header>
      <main className="chatbot-messages">
        <Chats />
      </main>
      <section className="chatbot-actions">
        <ChatInput />
      </section>
    </div>
  );
};

export default ChatBot;
