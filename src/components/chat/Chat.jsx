import { Avatar } from '@material-ui/core';
import "./Chat.css";
import React from 'react';
import { useHistory } from 'react-router';


const Chat = ({name, message, profilePic, timestamp}) => {
    const history = useHistory();
    return (
        <div className="chat" onClick={() => history.push(`/chat/${name}`)}>
            <Avatar className="chat__image" alt={name} src={profilePic} />
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
    )
}

export default Chat
