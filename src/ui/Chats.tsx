import "../assets/styles/_chat_list.scss";
import RetryPrompt from "./components/RetryPrompt.tsx";
import Prompt from "./components/Prompt.tsx";
import EmptyChat from "./components/EmptyChat.tsx";
import { useAppSelector } from "../hooks/useAppSelector.ts";

const Chats = () => {
  const messages = useAppSelector((state) => state.chats.messages);
  const isAiBusy = useAppSelector((state) => state.chats.isAiBusy);

  return (
    <div className="chat-list">
      {!messages.length && <EmptyChat />}

      {messages.map((message) => (
        <>
          <Prompt {...message} />
          {message.shouldRetry && <RetryPrompt {...message} />}
        </>
      ))}
      {isAiBusy && (
        <Prompt prompt="...thinking" timestamp={0} isUserPrompt={false} />
      )}
    </div>
  );
};

export default Chats;
