import type { IChat } from "../../Interfaces/IChat.ts";
import Avatar from "./Avatar.tsx";
import ReactMarkdown from "react-markdown";

const Prompt = (props: IChat) => {
  const bubbleClasses = [
    "message-bubble",
    props.isUserPrompt ? "user-prompt" : "ai-prompt",
    props.timestamp === 0 ? "placeholder_bubble" : "",
  ].join(" ");

  return (
    <div className="prompt-container">
      <Avatar isUser={props.isUserPrompt} timestamp={props.timestamp} />
      <div className={bubbleClasses} key={props.timestamp}>
        <ReactMarkdown>{props.prompt}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Prompt;
