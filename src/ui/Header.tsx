import { FaHistory } from "react-icons/fa";
import { useAppDispatch } from "../hooks/useAppDispatch.ts";
import { setView } from "../store/slices/viewSlice.ts";
import { VIEW } from "../enums/View.ts";
import { useAppSelector } from "../hooks/useAppSelector.ts";
import { FaMessage } from "react-icons/fa6";

const Header = () => {
  const dispatch = useAppDispatch();
  const activeView = useAppSelector((state) => state.view.activeView);
  const chatHistoryIsActive = activeView === VIEW.HISTORY;

  const onIconClick = (): void => {
    const newView = chatHistoryIsActive ? VIEW.CHAT : VIEW.HISTORY;
    dispatch(setView(newView));
  };

  return (
    <>
      <div className="header-title">Pijus AI</div>
      <div className="header-action">
        {!chatHistoryIsActive && <FaHistory onClick={onIconClick} />}
        {chatHistoryIsActive && <FaMessage onClick={onIconClick} />}
      </div>
    </>
  );
};

export default Header;
