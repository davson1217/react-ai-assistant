import "../assets/styles/_chat_input.scss";
import { type ChangeEvent, useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ChatInput() {
  const txRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const el = txRef.current;

    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }

    setInputValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <textarea
        name="prompt"
        placeholder="Write a prompt..."
        autoFocus={true}
        rows={1}
        ref={txRef}
        onChange={(e) => handleChange(e)}
      ></textarea>

      <div className="input-actions">
        {inputValue && (
          <span className="send" onClick={() => console.log("send click")}>
            <FaArrowCircleUp />
          </span>
        )}
      </div>
    </div>
  );
}
