import "../assets/styles/_chat_list.scss";
import RetryPrompt from "./components/RetryPrompt.tsx";
import Prompt from "./components/Prompt.tsx";
import EmptyChat from "./components/EmptyChat.tsx";
import { useAppSelector } from "../hooks/useAppSelector.ts";
import { Fragment, useEffect, useRef } from "react";

const Chats = () => {
  const messages = useAppSelector((state) => state.chats.messages);
  const isAiBusy = useAppSelector((state) => state.chats.isAiBusy);
  const chatListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chatListRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-list" ref={chatListRef}>
      {!messages.length && <EmptyChat />}

      {messages.map((message, index) => (
        <Fragment key={index}>
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
