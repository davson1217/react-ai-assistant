import "../assets/styles/_chat_bot.scss";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks.ts";
// import { ChatsMock } from "../Interfaces/IChat.ts";
// import { setChats } from "../store/slices/chatsSlice.ts";
import ChatInput from "./ChatInput.tsx";
import Chats from "./Chats.tsx";
import { FaBeer } from "react-icons/fa";
import useAI from "../hooks/useAI.ts";

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
