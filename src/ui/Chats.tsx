import { useAppSelector } from "../store/hooks.ts";
import "../assets/styles/_chat_list.scss";

const Chats = () => {
  const messages = useAppSelector((state) => state.chats.messages);

  return (
    <div className="chat-list">
      {messages.map((message) => (
        <div
          className={[
            "message-bubble",
            message.isUserPrompt ? "user-prompt" : "ai-prompt",
          ].join(" ")}
          key={message.timestamp}
        >
          {message.prompt}
        </div>
      ))}
    </div>
  );
};

export default Chats;
