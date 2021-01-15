import logo from './logo.svg';
import './App.css';
import SignIn from './LandingPage/Components/SignIn';
import React from 'react';
import LandingPage from './LandingPage/LandingPage';


function App() {

  //ユーザーのid(一意な値)を管理
  const [uid, setUid] = React.useState(null);

  return (
    <div className="App">
      <LandingPage setUid={setUid} />
    </div>
  );
}

export default App;
