import "./Chat.scss";
import ScrollToBottom from 'react-scroll-to-bottom';
const Chat = () => {
  return (
    <ScrollToBottom className="chat-section">
      <div className="chat you">
        <span className="name">paul</span>

        <p className="msg">this is paul mesage</p>
        <span className="time">5:00Am</span>
      </div>

      <div className="chat me">
        <span className="name">peter</span>

        <p className="msg">this is peters mesage</p>
        <span className="time">11:00Am</span>
      </div>
    </ScrollToBottom>

    // <ScrollToBottom className="chat-section">
    //   <div>
    //     <h6 className='chat-message'>
    //       <p className="chat-name">paul</p>
    //       hello from here
    //       <span className="chat-timestamp">12:10pm</span>
    //     </h6>
    //   </div>
    // </ScrollToBottom>
  );
};
export default Chat;
