import React from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Dialogues from './components/dialogues/Dialogues';
import News from './components/news/News'
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='content'>
          <Route path='/news' render = { () => <News posts = {props.data.posts} />} />
          <Route path='/profile' component = {Profile} />
          <Route path='/messeges' render = { () => <Dialogues data = {props.data} 
                                                              updateNewMsgText={props.updateNewMsgText}
                                                              addMsg = {props.addMsg} />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
