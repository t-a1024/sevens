import React, { useRef, useState } from 'react';
import { Manager } from '../game/manager';
import Card from "../assets/cardCompornents";
import PlayerView from "./PlayerView";

function PCView() {
    const managerRef = useRef<Manager | null>(null);
    const [playerList, setPlayerList] = useState<React.JSX.Element[]>([]);
    const [gameStarted, setGameStarted] = useState(false); 
    const [currentPlayerName, setCurrentPlayerName] = useState<string>("");

    if (!managerRef.current) {
        managerRef.current = new Manager();
    }

    const manager: Manager = managerRef.current;

    const gameStart = () => {
        if (!gameStarted) {
            manager.startGame();
            setGameStarted(true);
        }
    };

    const addPlayer = () => {
        setPlayerList([...playerList, <PlayerView key={playerList.length} manager={manager} />]);
    };

    const update = () => {
        if (gameStarted) {
            setCurrentPlayerName(manager.getBoard().getNowPlayerName());
        }  
    };

    return (
        <div id='PCView'>
            {!gameStarted ? (
                <div>
                    <button onClick={gameStart}>gamestart</button>
                    <button onClick={addPlayer}>add player</button>
                </div>
            ) : (
                <div>
                    <h2>現在のプレイヤー: {currentPlayerName}</h2>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {manager.getBoard().board.map((card, index) => (
                            <div key={index} style={{ margin: "10px" }}>
                                <Card id={card.situation ? card.id : 0} mark={card.mark} color={card.color} />
                                <h5>{card.owner?.getName()}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button onClick={update}>updatePC</button>
            {playerList}
        </div>
    );
}

export default PCView;
