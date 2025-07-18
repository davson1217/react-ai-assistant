import { FaRepeat } from "react-icons/fa6";
import useAI from "../../hooks/useAI.ts";
import type { IChat } from "../../Interfaces/IChat.ts";

const RetryPrompt = ({ prompt }: IChat) => {
  const [isBusy, ai] = useAI();

  const handleRetry = () => {
    ai.sendPrompt(prompt, true);
  };

  return (
    <div className="retry-prompt">
      {!isBusy && (
        <span onClick={handleRetry}>
          Retry <FaRepeat />
        </span>
      )}

      {isBusy && "...retrying"}
    </div>
  );
};

export default RetryPrompt;
