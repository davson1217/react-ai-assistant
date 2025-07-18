import { useAppSelector } from "../store/hooks.ts";
import "../assets/styles/_chat_list.scss";
import RetryPrompt from "./components/RetryPrompt.tsx";
import Prompt from "./components/Prompt.tsx";
import EmptyChat from "./components/EmptyChat.tsx";

const Chats = () => {
  const messages = useAppSelector((state) => state.chats.messages);

  return (
    <div className="chat-list">
      {!messages.length && <EmptyChat />}

      {messages.map((message) => (
        <>
          <Prompt {...message} />
          {message.shouldRetry && <RetryPrompt {...message} />}
        </>
      ))}
    </div>
  );
};

export default Chats;
