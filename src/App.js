import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="Navbar">
        <img src="logo.png" alt='logo' className="Logo"></img>
      </div>
      <div className="Container">
        <text className="Title">로그인</text>
        <text className="InputTitle">ID</text>
        <input type="text" placeholder="아이디를 입력하세요" className="Input"></input>
        <text className="InputTitle">Password</text>
        <input type="password" placeholder="비밀번호를 입력하세요" className="Input"></input>
        <button className="FindIDPW">아이디/비밀번호 찾기</button>
        <button className="Login">로그인</button>
        <button className="SignUp">회원가입</button>
      </div>
    </div>
  );
}

export default App;
