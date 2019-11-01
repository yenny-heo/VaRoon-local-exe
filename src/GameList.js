import React from 'react';
import './GameList.css';
let executablePath = "/Applications/Calculator.app"
class GameList extends React.Component{
    _executeGame = () => {
       
    }

    render(){
        return(
            <div className="Game">
                <a href="robots.txt"  type="application/octet-stream">
                    <img src="./fruitCutting.png" alt="fruitCutting" className="ThumbNail"></img>
                </a>
            </div>
        );
    }
}

export default GameList;