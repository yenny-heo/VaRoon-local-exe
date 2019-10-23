import React from 'react';
import './Main.css';

class Main extends React.Component {

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
                            안녕하세요,⠀
                             <div style={{ fontWeight: 400 }}>{this.props.name}</div>
                            님
                            </div>
                        <div className="Search">
                            <img src="searchIcon.png" alt="search" className="SearchIcon"></img>
                            <input type="text" placeholder="VR 컨텐츠의 이름을 검색해보세요!" className="SearchInput"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    _measure = () =>{
    }
}
export default Main;