import type { IChat } from "../../Interfaces/IChat.ts";

const Prompt = (props: IChat) => {
  const classes = [
    "message-bubble",
    props.isUserPrompt ? "user-prompt" : "ai-prompt",
  ].join(" ");

  return (
    <div className={classes} key={props.timestamp}>
      {props.prompt}
    </div>
  );
};

export default Prompt;
