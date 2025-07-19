import "../assets/styles/_chat_list.scss";
import RetryPrompt from "./components/RetryPrompt.tsx";
import Prompt from "./components/Prompt.tsx";
import EmptyChat from "./components/EmptyChat.tsx";
import { useAppSelector } from "../hooks/useAppSelector.ts";
import { Fragment } from "react";

const Chats = () => {
  const messages = useAppSelector((state) => state.chats.messages);
  const isAiBusy = useAppSelector((state) => state.chats.isAiBusy);

  return (
    <div className="chat-list">
      {!messages.length && <EmptyChat />}

      {messages.map((message) => (
        <Fragment key={message.timestamp}>
          <Prompt {...message} />
          {message.shouldRetry && <RetryPrompt {...message} />}
        </Fragment>
      ))}

      {isAiBusy && (
        <Prompt
          prompt="...thinking"
          timestamp={0}
          isUserPrompt={false}
          sessionId={""}
        />
      )}
    </div>
  );
};

export default Chats;
