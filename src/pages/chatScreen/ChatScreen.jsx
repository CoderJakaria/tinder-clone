import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import "./ChatScreen.css";


const ChatScreen = () => {
    const {person} = useParams();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: 'https://pyxis.nymag.com/v1/imgs/dc6/431/1f2359b510bceecc2722bccc0b19c7a0c2-ellen.rsquare.w1200.jpg',
            message: "what's up ?"
        },
        {
            name: "Ellen",
            image: 'https://pyxis.nymag.com/v1/imgs/dc6/431/1f2359b510bceecc2722bccc0b19c7a0c2-ellen.rsquare.w1200.jpg',
            message: "what are  you doing ?"
        },
        {
            message: "I build the tinder clone"
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('')
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH {person.toUpperCase()} ON 4/29/2021</p>
            {
                messages.map(message => (
                        message.name ? (
                            <div className="chatScreen__message">
                                <Avatar className="chatScreen__image"
                                    alt={message.name}
                                    src={message.image}
                                />
                                <p className="chatScreen__text">{message.message}</p>
                           </div>
                        )    :   (
                            <div className="chatScreen__message">
                                <p className="chatScreen__textUser">{message.message}</p>
                           </div>
                        )
                ))
            }

                <form className="chatScreen__input">
                    <input 
                      className="chatScreen__inputField"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      type="text" 
                      placeholder="Type a message..."/>
                    <button onClick={handleSend} className="chatScreen__inputButton" type="submit">SEND</button>
                </form>

        </div>
    )
}

export default ChatScreen
