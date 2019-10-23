import React from 'react';
import './Main.css';
import Popup from './Popup';

class Main extends React.Component {
    state = {
        patient: "",
        showPopup: false
    }

    render() {
        let Dr = null;
        if (this.props.role === "ROLE_Doctor")
            Dr = <div className="Flag">Dr.</div>
        return (
            <div>
                {Dr}
                <div className="Navbar">
                    <img src="logo.png" alt='logo' className="Logo"></img>
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
                        <div className="Search">
                            <img src="searchIcon.png" alt="search" className="SearchIcon"></img>
                            <input type="text" placeholder="VR 컨텐츠의 이름을 검색해보세요!" className="SearchInput"></input>
                        </div>
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

    _patientInfo = (ID) => {
        //ID가 올바른지 유효 검사 필요
        
        //ID가 올바르지 않은 경우
        //ID가 올바르지 않습니다 팝업창 출력

        //ID가 올바른 경우
        this.setState({ showPopup: !this.state.showPopup, patient: ID },() => {this._measure();});
    }
}
export default Main;