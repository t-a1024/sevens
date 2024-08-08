import React, { useState, useEffect, useRef } from 'react';
import Card from "./assets/cardCompornents";
import { Board } from './game/board';
import { Player } from './game/player';

function App() {
  // useRefを使用してBoardのインスタンスを1回だけ作成
  const managerRef = useRef<Board | null>(null);

  // 初回マウント時にgameStartを一度だけ実行するためのフラグ
  const hasGameStarted = useRef(false);

  if (!managerRef.current) {
    managerRef.current = new Board();
  }

  const manager = managerRef.current;

  // プレイヤーとボードの状態を管理
  const [players, setPlayers] = useState<Player[]>([]);
  const [board, setBoard] = useState(manager.getboard);

  // 初回マウント時にgameStartを実行してプレイヤーを初期化
  useEffect(() => {
    if (!hasGameStarted.current) {
      const initialPlayers = [
        new Player("t-a", manager),
        new Player("tas", manager),
        new Player("aki", manager),
      ];
      setPlayers(initialPlayers);

      manager.gameStart(initialPlayers);
      setBoard(manager.getboard); // 初期ボード状態を設定

      hasGameStarted.current = true; // gameStartが実行されたことを記録
    }
  }, [manager]);

  // カード使用時のハンドラ
  const handleUseCard = (playerIndex: number, cardIndex: number) => {
    const newPlayers = [...players];
    const player = newPlayers[playerIndex];
    const card = player.hand[cardIndex];

    player.useCard(card); // カードを使う

    // 状態を更新して画面をリフレッシュ
    setPlayers(newPlayers);
    setBoard(manager.getboard);
  };

  return (
    <div className="App">
      {/* ボードの表示 */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {board.map((card, index) => (/*  card.situation = trueならid={card.id}、違えばid=0で表示したい */
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
  );
}

export default App;
