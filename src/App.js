import React from 'react';
import './App.css';
import axios from 'axios';
import Main from './Main';

let id, password;
class App extends React.Component {
  state={
    login: false
  }

  render() {
    return (
      this.state.login ? <Main 
      token={this.state.token} name={this.state.name} role={this.state.role} 
      _logout={this._logout.bind(this)}></Main> :
      <div>
        <div className="Navbar">
          <img src="logo.png" alt='logo' className="Logo"></img>
        </div>
        <div className="Container">
          <p className="Title">로그인</p>
          <p className="InputTitle">ID</p>
          <input type="text" placeholder="   아이디를 입력하세요" onChange={(e)=>{id=e.target.value;}} className="Input"></input>
          <p className="InputTitle">Password</p>
          <input type="password" placeholder="   비밀번호를 입력하세요" onChange={(e)=>{password=e.target.value;}} className="Input"></input>
          <button className="FindIDPW">아이디/비밀번호 찾기</button>
          <button onClick={this._loginAuth} className="Login">로그인</button>
          <button className="SignUp">회원가입</button>
        </div>
      </div>
    );
  }
  _loginAuth = () => {
    if (id === undefined || id === "" || password === undefined || password === "") {
      alert("아이디와 비밀번호를 입력해주세요");
    }
    else{
      axios({
        method: 'post',
        url: '/Home/Login',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          id: id,
          pw: password
        }
      })
        .then(json => {
          if (json.status === 200) {
            this.setState({ login: true, token: json.data.token, name: json.data.name, role: json.data.role });
          }
        })
        .catch(err => {console.log(err); alert("아이디 또는 비밀번호가 틀렸습니다") });
    }
  }
  _logout = () =>{
    this.setState({login: false})
  }
}

export default App;
