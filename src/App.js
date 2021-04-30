import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import TinderCards from './pages/tinder_card/TinderCards';
import SwipeButtons from './components/swipe-buttons/SwipeButtons';
import Chats from './pages/chats/Chats';
import ChatScreen from './pages/chatScreen/ChatScreen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
        </Route>

        <Route path="/chat">
            <Header backButton="/" />
            <Chats />
        </Route>

        <Route path="/account">
            <h2>Iam Account page</h2>
        </Route>

        <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
