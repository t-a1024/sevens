import React, { useState } from 'react';
import { Manager } from '../game/manager';
import { action } from '../game/userAction';

function PlayerView({ manager }: { manager: Manager }) {
    const [playerName, setPlayerName] = useState("");
    const [joined, setJoined] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [myHand, setMyHand] = useState<string[]>([]);
    const [userAction, setUserAction] = useState<action>(new action('', manager));

    const handleJoinGame = () => {
        const nameInput = (document.getElementById("inputName") as HTMLInputElement).value;
        if (joined) {
            return;
        }
        if (nameInput) {
            const newUserAction = new action(nameInput, manager);
            setUserAction(newUserAction);
            setPlayerName(nameInput);
            setJoined(true);
        }
    };

    const startGame = () => {
        if (!gameStarted && joined) {
            setMyHand(userAction.getHand().split('/'));
            setGameStarted(true);
        }
    };

    const updateHand = () => {
        if (joined) {
            const updatedHand = manager.getPlayerHand(playerName).split('/');
            setMyHand(updatedHand);
        }
    };

    const update = () => {
        if (!gameStarted && manager.gameStarted) {
            startGame();
        } else {
            updateHand();
        }
    };

    // useEffect(() => {
    //     const update = () => {
    //         if (!gameStarted && manager.gameStarted) {
    //             startGame();
    //         } else {
    //             updateHand();
    //         }
    //     };

    //     document.getElementById('playerView')?.addEventListener('keyup', update);

    //     // Cleanup function to remove event listener
    //     return () => {
    //         document.getElementById('playerView')?.removeEventListener('keyup', update);
    //     };
    // }, [gameStarted, joined, playerName, manager]);

    return (
        <div id='playerView'>
            {/* ゲームが開始されておらず、参加していない場合 */}
            {!gameStarted && !joined && (
                <div>
                    <input type="text" name="playerName" id="inputName" placeholder="Enter your name" />
                    <button onClick={handleJoinGame}>Join Game</button>
                </div>
            )}

            {/* ゲームが開始されておらず、参加している場合 */}
            {!gameStarted && joined && (
                <div>
                    <p>Waiting for the game to start, {playerName}...</p>
                </div>
            )}

            {/* ゲームが開始されていて、参加している場合 */}
            {gameStarted && joined && (
                <div>
                    {myHand.map((hand, index) => (
                        <button key={index} onClick={() => userAction.useCard(hand)} value={hand}>
                            {hand}
                        </button>
                    ))}
                </div>
            )}

            {/* ゲームが開始されていて、参加していない場合 */}
            {gameStarted && !joined && (
                <div>
                    <p>参加は締め切られました</p>
                </div>
            )}
            <button onClick={update}>updatePlayer</button>
        </div>
    );
}

export default PlayerView;
