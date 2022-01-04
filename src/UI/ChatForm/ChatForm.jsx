import { FaSmile, FaPaperclip, FaMicrophone } from "react-icons/fa";
import "./ChatForm.scss";
const ChatForm = () => {
  return (
//     <div className="chat-footer">
//     <FaPaperclip/>

//     <form>
//         <input 
//         placeholder="Type message .."
//         type="text"
//         />
//         <button
      
//         type="submit">
//             <FaSmile/>
//         </button>
//     </form>

//     <FaMicrophone/>
// </div>

    <div className="chat-form">
      <div className="action-btn">
        <div className="icon-block"> <FaSmile/> </div>
        <div className="file-share">
          <input type="file" />
          <div className="icon-block" ><FaPaperclip/></div>
        </div>
      </div>
      <input className="chat-input" placeholder="message" />

      <div className="icon-block active"><FaMicrophone/></div>
    </div>
  );
};

export default ChatForm;
