import botlogo from "../../../src/assets/bot.svg";
import "../../assets/styles/_empty_chat.scss";

const EmptyChat = () => {
  return (
    <div className="empty-chat">
      <img src={botlogo} alt="bot" />
      <div>Start a chat by entering a prompt in the input field below</div>
    </div>
  );
};

export default EmptyChat;
