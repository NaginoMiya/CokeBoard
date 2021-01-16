import logo from './logo.svg';
import './App.css';
import SignIn from './LandingPage/Components/SignIn';
import React from 'react';

import LandingPage from './LandingPage/LandingPage';
import MainPage from './MainPage/MainPage';


function App() {

  //ユーザーのid(一意な値)を管理
  const [uid, setUid] = React.useState(null);

  return (
    <div className="App">
      {(() => {
        if(uid == null) return <LandingPage setUid={setUid} />;
        else return <MainPage setUid={setUid} uid={uid} />;
      })()}
    </div>
  );
}

export default App;
