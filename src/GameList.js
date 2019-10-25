import React from 'react';
import './GameList.css'

class GameList extends React.Component{
    render(){
        return(
            <div className="Game">
                <img src="./fruitCutting.png" alt="fruitCutting" className="ThumbNail"></img>
            </div>
        );
    }
}

export default GameList;