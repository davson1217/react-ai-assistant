import "../assets/styles/_chat_input.scss";
import { useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import useAI from "../hooks/useAI.ts";

export default function ChatInput() {
  const txRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isAgentBusy, agent] = useAI();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = txRef.current;

    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }

    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (!isAgentBusy) {
      agent.sendPrompt(inputValue);
      setInputValue("");
    }
  };

  const sendOnEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const shouldSendPrompt = e.key === "Enter" && !isAgentBusy;

    if (shouldSendPrompt) {
      agent.sendPrompt(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="wrapper">
      <textarea
        name="prompt"
        placeholder="Write a prompt..."
        autoFocus={true}
        rows={1}
        ref={txRef}
        value={inputValue}
        onKeyUp={sendOnEnter}
        onChange={(e) => handleChange(e)}
      ></textarea>

      <div className="input-actions">
        {inputValue && (
          <span
            className={["send", isAgentBusy ? "disabled" : ""].join(" ")}
            onClick={handleSendClick}
          >
            <FaArrowCircleUp />
          </span>
        )}
      </div>
    </div>
  );
}
