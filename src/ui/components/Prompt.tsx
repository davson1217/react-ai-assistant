import type { IChat } from "../../Interfaces/IChat.ts";
import Avatar from "./Avatar.tsx";

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
        {props.prompt}
      </div>
    </div>
  );
};

export default Prompt;
