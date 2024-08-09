import { useState, useRef } from 'react';
import Card from "./assets/cardCompornents";
import { Board } from './game/board';
import { Player } from './game/player';

function App() {
  // Boardインスタンスを1回だけ作成
  const managerRef = useRef<Board | null>(null);

  // プレイヤー名を入力するためのステート
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [board, setBoard] = useState<any[]>([]);
  const [gameStarted, setGameStarted] = useState(false); // ゲーム開始状態を管理
  const [currentPlayerName, setCurrentPlayerName] = useState<string>(""); // 現在のプレイヤー名を管理

  if (!managerRef.current) {
    managerRef.current = new Board();
  }

  const manager = managerRef.current;

  // プレイヤーを追加するハンドラ
  const addPlayer = () => {
    if (playerName.trim() !== "") {
      const newPlayer = new Player(playerName, manager);
      setPlayers([...players, newPlayer]);
      setPlayerName(""); // 入力欄をクリア
    }
  };

  // ゲームを開始するハンドラ
  const startGame = () => {
    manager.gameStart(players);
    setBoard(manager.getboard);
    setCurrentPlayerName(manager.getNowPlayerName()); // 現在のプレイヤー名を取得
    setGameStarted(true); // ゲーム開始状態にする
  };

  // カード使用時のハンドラ
  const handleUseCard = (playerIndex: number, cardIndex: number) => {
    const newPlayers = [...players];
    const player = newPlayers[playerIndex];
    const card = player.hand[cardIndex];

    player.useCard(card); // カードを使う

    // 状態を更新して画面をリフレッシュ
    setPlayers(newPlayers);
    setBoard(manager.getboard);
    setCurrentPlayerName(manager.getNowPlayerName()); // 使用後に現在のプレイヤー名を更新
  };

  return (
    <div className="App">
      {!gameStarted ? (
        // ゲーム開始前はプレイヤー登録フォームとプレイヤーリストを表示
        <div>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="プレイヤー名を入力"
          />
          <button onClick={addPlayer}>プレイヤーを追加</button>
          <button onClick={startGame} disabled={players.length === 0}>ゲーム開始</button>
          
          <h3>登録されたプレイヤー:</h3>
          <ul>
            {players.map((player, index) => (
              <li key={index}>{player.getName()}</li>
            ))}
          </ul>
        </div>
      ) : (
        // ゲーム開始後はボードとプレイヤーの手札、プレイ可能なカードを表示
        <div>
          <h2>現在のプレイヤー: {currentPlayerName}</h2> {/* 現在のプレイヤー名を表示 */}

          {/* ボードの表示 */}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {board.map((card, index) => (
              <div key={index} style={{ margin: "10px" }}>
                <Card id={card.situation ? card.id : 0} mark={card.mark} color={card.color} />
                <h5>{card.owner?.getName()}</h5>
              </div>
            ))}
          </div>

          {/* プレイヤーの手札の表示 */}
          <div>
            {players.map((player, playerIndex) => (
              <div key={playerIndex} style={{ display: "flex", flexWrap: "wrap" }}>
                <h3>{player.getName()}'s Hand:</h3>
                {player.hand.map((card, cardIndex) => (
                  <button key={cardIndex} onClick={() => handleUseCard(playerIndex, cardIndex)}>
                    {card.id} {card.mark}
                  </button>
                ))}
                <button onClick={() => player.pass()}>パス</button>
              </div>
            ))}
          </div>

          {/* プレイ可能なカードの表示 */}
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {manager.GetCanPlaceCard().map((card, index) => (
              <div key={index} style={{ margin: "10px" }}>
                <Card id={card.id} mark={card.mark} color={card.color} />
                <h5>{card.owner?.getName()}</h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
