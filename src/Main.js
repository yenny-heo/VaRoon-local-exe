import React from 'react';
import axios from 'axios';
import './Main.css';
import Popup from './Popup';
import GameList from './GameList';

class Main extends React.Component {
    state = {
        patient: "",
        showPopup: false
    }

    render() {
        let Dr = null;
        if (this.props.role === "ROLE_Doctor")
            Dr = <div className="Flag">Dr.</div>

        let CurPatient = null;
        if (this.props.role === "ROLE_Doctor" && this.state.patient !== "")
            CurPatient =
                <div className="CurPatient">
                    <div><b>{this.state.patient}</b>님 치료 진행중</div>
                    <button onClick={() => {if (window.confirm('환자를 삭제하시겠습니까?')) this._patientDelete()}}><img src="./close.png" alt="close" className="CloseImg"></img></button>
                </div>

        return (
            <div>
                {Dr}
                <div className="Navbar">
                    <img src="logo.png" alt='logo' className="Logo"></img>
                    <button onClick={() =>{if (window.confirm('로그아웃 하시겠습니까?')) this.props._logout()}}><div>L O G O U T</div></button>
                </div>

                <div className="Container2">
                    <div className="Menu">
                        <div className="MenuTitle">M E N U</div>
                        <button className="Home">홈</button>
                        <button onClick={this._measure} className="Others">측정</button>
                        <button className="Others">결과 확인</button>
                    </div>
                    <div className="Contents">
                        <div className="Hello">
                            안녕하세요,⠀<b>{this.props.name}</b>님
                        </div>
                        {CurPatient}
                        <div className="Search">
                            <img src="searchIcon.png" alt="search" className="SearchIcon"></img>
                            <input type="text" placeholder="VR 컨텐츠의 이름을 검색해보세요!" className="SearchInput"></input>
                        </div>
                        <div className="GameList"> 게임 목록</div>
                        <GameList></GameList>
                    </div>
                </div>
                {this.state.showPopup ?
                    <Popup
                        closePopup={this._measure.bind(this)}
                        register={this._patientInfo.bind(this)}></Popup> : null}
            </div>
        )
    }
    _measure = () => {
        if (this.props.role !== "ROLE_Doctor" || this.state.patient !== "") {
            //측정 실행
            console.log("measure start!");


        }
        else {//팝업창 실행
            this.setState({ showPopup: !this.state.showPopup });
        }
    }

    _patientDelete = () => {
        //환자 삭제
        axios({
            method: 'DELETE',
            url: `/Chart?id=${this.state.patient}`,
            headers: {
                'accept': 'application/json',
                'X-AUTH-TOKEN': this.props.token
            },
            data: {
                id: this.state.patient
            }
        }).then(json => { this.setState({ patient: "" }); console.log("patient deleted!") })
            .catch(err => console.log(err));
    }

    _patientInfo = (ID) => {
        //ID가 올바른지 유효 검사
        axios({
            method: 'post',
            url: `/Chart?id=${ID}`,
            headers: {
                'accept': 'application/json',
                'X-AUTH-TOKEN': this.props.token
            },
            data: {
                id: ID
            }
        }).then(json => {
            if (json.data.result)
                this.setState({ showPopup: !this.state.showPopup, patient: ID }, () => { this._measure() })
            else alert("아이디가 올바르지 않습니다")
        })
            .catch(err => console.log(err));
    }
}
export default Main;