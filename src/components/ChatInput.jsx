import { useState} from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';
export function ChatInput({chatMessages,setChatMessages}){
    const [inputText,setInputText]=useState('');
    function saveInputText(event) {
        setInputText(event.target.value);
    }
    function sendMessages(){
    const newChatMessages =[
        ...chatMessages,
        {
        message:inputText,
        sender:'user',
        id:crypto.randomUUID()
        }
    ]
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
    ...newChatMessages,
    {
        message:response,
        sender:'robot',
        id:crypto.randomUUID()
    }
    ]);
    setInputText('');
    }
    return(
        <div /*className="chat-input-container"*/
            className="flex mb-[10px]"
        >
        <input 
            //className="chat-input" 
            className="flex-grow-1 mr-[10px] py-[12px] px-[15px] rounded-lg border-1 border-[#cccccc] "
            placeholder="Send a message to Chatbot" 
            size="30" 
            onChange={saveInputText}
            value={inputText}
        />
        <button
            onClick={sendMessages}
            //className="send-Button"
            className=" bg-[rgb(25,135,84)] py-[10px] px-[20px] rounded-lg text-white hover:bg-[rgba(208, 125, 10, 1)]"
        >
            Send
        </button>
        </div>
    );
}
