import "../assets/styles/_chat_bot.scss";
import ChatInput from "./ChatInput.tsx";
import Chats from "./Chats.tsx";
import Header from "./Header.tsx";
import { useAppSelector } from "../hooks/useAppSelector.ts";
import { VIEW } from "../enums/View.ts";
import History from "./History.tsx";

const ChatBot = () => {
  const activeView = useAppSelector((state) => state.view.activeView);
  const chatHistoryIsActive = activeView === VIEW.HISTORY;

  return (
    <div className="bot">
      <header className="chatbot-header">
        <Header />
      </header>
      <main className="chatbot-messages">
        {chatHistoryIsActive && <History />}
        {!chatHistoryIsActive && <Chats />}
      </main>
      <section className="chatbot-actions">
        {!chatHistoryIsActive && <ChatInput />}
      </section>
    </div>
  );
};

export default ChatBot;
