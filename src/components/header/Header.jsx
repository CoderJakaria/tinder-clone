import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';

const Header = ({backButton}) => {
    const history = useHistory();
    return (
        <div className="header">
           <IconButton onClick={() => backButton ? history.goBack() : history.push("/account") }>
               {
                   backButton ? (<ArrowBackIosIcon className="header__icon" fontSize="large" />) : (<PersonIcon className="header__icon" fontSize="large" />)
               }
           </IconButton>

            <img 
              onClick={() => history.push("/")}
              className="header__logo"
              src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png" alt="tinder logo"/>

            <IconButton onClick={() => history.push("/chat")}>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            
        </div>
    )
}

export default Header