import React from 'react';
import './Popup.css'

let patientID;
class Popup extends React.Component{
    render(){
        return(
            <div className="Popup">
                <div className="PopupInner">
                    <button onClick={this.props.closePopup} className="CloseButton">
                        <img src="./close.png" alt="close" className="CloseImg"></img>
                    </button>
                    <div className="PopupContents">
                        <div><b>환자의 ID</b>를 입력하세요</div>
                        <input placeholder="아이디를 입력해주세요" onChange={(e)=>{patientID = e.target.value}} className="PatientID"></input>
                        <button onClick={()=>this.props.register(patientID)} className="Confirm">확인</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;