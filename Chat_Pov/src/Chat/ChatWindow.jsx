import "./ChatWindow.css";
import { GridSize48 } from "../GridSize48/GridSize48.jsx";

export const ChatWindow = ({ className, ...props }) => {
  return (
    <div className={"chat-window-container " + className}>
      <div className="landscape">
        <div className="frame-35"></div>
        <div className="frame-36"></div>
        <img className="vector" src="vector0.svg" />
        <div className="frame-37"></div>
        <img className="vector2" src="vector1.svg" />
      </div>
      <div className="main-bg"></div>
      <div className="chat-window-bg">
        <img className="chat-avatar" src="chat-gpt-avatar-10.png" />
      </div>
      <div className="chat-window">
        <div className="voice-input-icon">
          <div className="frame-39"></div>
        </div>
      </div>
    </div>
  );
};
