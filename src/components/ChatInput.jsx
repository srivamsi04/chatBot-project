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
        <div className="chat-input-container">
        <input 
            className="chat-input" 
            placeholder="Send a message to Chatbot" 
            size="30" 
            onChange={saveInputText}
            value={inputText}
        />
        <button
            onClick={sendMessages}
            //className="send-Button"
            className="bg-red-500"
        >
            Send
        </button>
        </div>
    );
}
