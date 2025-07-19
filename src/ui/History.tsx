import "../assets/styles/_history.scss";
import { get, rm as clearStorage } from "lockr";
import { CHATS_KEY, type IChat } from "../Interfaces/IChat.ts";
import { Fragment, useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch.ts";
import { setChats } from "../store/slices/chatsSlice.ts";
import { setView } from "../store/slices/viewSlice.ts";
import { VIEW } from "../enums/View.ts";
import { FaMessage } from "react-icons/fa6";

const History = () => {
  const [history, setHistory] = useState<IChat[][] | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const chats: Record<string, IChat[]> = get(CHATS_KEY);
    if (chats) {
      const list = Object.values(chats);
      const historyInDescOrder = list.reverse();

      setHistory(historyInDescOrder);
    }
  }, []);

  const handleSessionClick = (session: IChat[]) => {
    console.log(session);
    dispatch(setChats(session));
    dispatch(setView(VIEW.CHAT));
  };

  const handleClearClick = () => {
    clearStorage(CHATS_KEY);
    dispatch(setView(VIEW.CHAT));
  };

  const formatSessionTitle = (title: string) => {
    if (title.length > 40) {
      return title.substring(0, 40) + "...";
    }

    return title;
  };

  return (
    <div className="chat-history">
      <div className="ch-flex_header">
        <h3 className="ch-title">Chats</h3>
        {history && (
          <div className="ch-clear" onClick={handleClearClick}>
            Clear history
          </div>
        )}
      </div>
      <hr />
      <div>
        {history?.map((session) => (
          <Fragment key={session[0].sessionId}>
            <div
              className="chl-container"
              onClick={() => handleSessionClick(session)}
            >
              <div className="chl-session">
                <div className="chls_count">
                  {session.length} prompt{session.length > 1 ? "s" : ""}
                </div>
                <div className="first_message">
                  {formatSessionTitle(session[0].prompt)}
                </div>
              </div>

              <div className="chl-continue">Continue</div>
            </div>
            <hr />
          </Fragment>
        ))}
      </div>

      {!history && (
        <div className="empty-ch-list">
          <div>
            <p>Your chat history is empty</p>
            <p onClick={() => dispatch(setView(VIEW.CHAT))}>
              Start a chat <FaMessage />
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
