import "../assets/styles/_chat_input.scss";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import useAI from "../hooks/useAI.ts";
import { useAppSelector } from "../hooks/useAppSelector.ts";
import { VIEW } from "../enums/View.ts";

export default function ChatInput() {
  const txRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isAgentBusy, agent] = useAI();
  const activeView = useAppSelector((state) => state.view.activeView);

  useEffect(() => {
    if (activeView === VIEW.CHAT) {
      txRef.current?.focus();
    }
  }, [activeView]);
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
