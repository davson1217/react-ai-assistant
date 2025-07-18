import botLogo from "../../assets/bot.svg";
import userLogo from "../../assets/react.svg";

interface AvatarProps {
  isUser: boolean;
  timestamp: number;
}

const Avatar = ({ isUser, timestamp }: AvatarProps) => {
  return (
    <div className={`ai-prompt-avatar ${isUser ? "" : "is_bot"}`}>
      {isUser && <img src={userLogo} alt="avatar" height={40} width={40} />}
      <div className="apa_info">
        <div className="apa_info_name">{isUser ? "You" : "Jack"}</div>
        <div className="apa_info_timestamp">
          {timestamp ? new Date(timestamp).toLocaleDateString() : <></>}
        </div>
      </div>
      {!isUser && <img src={botLogo} alt="avatar" height={50} width={50} />}
    </div>
  );
};

export default Avatar;
