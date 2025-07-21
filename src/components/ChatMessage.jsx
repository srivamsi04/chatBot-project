import RobotProfileimage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css';
import dayjs from 'dayjs';

const now = dayjs();
console.log(now.format('YYYY-MM-DD HH:mm:ss'));
export function ChatMessage({message, sender}) {
    //const message=props.message;
    
    //const sender=props.sender;
    //const { message, sender}=props;
/*  if(sender ==="robot"){
    return(
        <div>
        <img src="robot.png" class="userImg" />
        {message}
    </div>
    );
    } */

    return (
    <div className={sender==='user'
        ?'chat-message-user'
        :'chat-message-robot'
    }>
        {sender ==='robot' && (
        <img src={RobotProfileimage} 
        className="chat-message-profile" />
        )}
        <div className="chat-message-text">
        {message}
        </div>
        {sender ==='user' && (
        <img src={UserProfileImage}
        className="chat-message-profile" />
        )
        }
    </div>
    );
}