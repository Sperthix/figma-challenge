import "../../styles/helpers/chat/Chat.css";

import checkmarks from "../../assets/chat/Checkmarks.svg";
import { Fragment } from "react";

const Chat = (props) => {
  return (
    <Fragment>
      {props.left && !props.bubles && (
        <div className="chatWindowAgent">
          <img src={props.pic} alt={props.alt} />
          <div className="agentMessage">
            <span>{props.message}</span>
          </div>
        </div>
      )}
      {!props.left && (
        <div className="chatWindowCustomer">
          <div className="customerMessage">
            <span>{props.message}</span>
            <img src={checkmarks} alt="message was seen" />
          </div>
        </div>
      )}
      {props.left && props.bubles && (
        <div className="chatTyping">
          <img src={props.pic} alt={props.alt} />
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
      )}
    </Fragment>
  );
};

export default Chat;
