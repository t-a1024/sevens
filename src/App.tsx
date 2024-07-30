import React, { useState, useEffect } from 'react';
import Card from "./assets/cardCompornents";
import { CardData } from "./assets/cardData";
import { markData } from "./assets/markData";
import './App.css'; // CSSファイルをインポート

// 配列をシャッフルする関数を定義
function shuffleArray(array:any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// カードのデータと表示用の型定義
interface ShuffledCard {
  id: number;
  str: string;
  label: any;
  mark: string;
  color: string;
  isFlipped: boolean;
  isMatched: boolean;
}

function App() {
  // カードの初期データ
  const [cards, setCards] = useState<ShuffledCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [moveCount, setMoveCount] = useState(0); // 手数の状態を追加


  // 初期化処理
  useEffect(() => {
    // idが0のカードを取り除く
    const filteredCardData = CardData.filter(card => card.id !== 0);

    // CardDataとmarkDataの組み合わせを作成
    const combinedData = filteredCardData.flatMap(card =>
      markData.map(mark => ({
        ...card,
        mark: mark.label,
        color: mark.color,
        isFlipped: false,
        isMatched: false,
      }))
    );

    // シャッフルされたカードデータ
    const shuffledData = shuffleArray(combinedData);
    setCards(shuffledData);
  }, []);

  // カードをクリックしたときの処理
  const handleCardClick = (index: number) => {
    if (cards[index].isFlipped || cards[index].isMatched || flippedCards.length === 2) {
      return;
    }

    setMoveCount(moveCount + 1); // カードをクリックするたびに手数を増加

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;

      if (newCards[firstIndex].str === newCards[secondIndex].str) {
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
        setMatchedCount(matchedCount + 2);
      } else {
        setTimeout(() => {
          newCards[firstIndex].isFlipped = false;
          newCards[secondIndex].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // ゲームクリアの判定
  useEffect(() => {
    if (matchedCount === cards.length && cards.length > 0) {
      alert("クリアおめでとうございます！  手数: "+moveCount);
    }
  }, [matchedCount, cards]);

  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="bg_pattern1 Paper_v2">
      <h3>手数: {moveCount}</h3>
      <h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1><h1></h1>
      {cards.map((card, index) => (
        <div key={index} style={{ margin: "10px" }} onClick={() => handleCardClick(index)} className={`card ${card.isFlipped ? 'flipped' : 'unflipped'}`}>
          {card.isFlipped || card.isMatched ? (
            <Card id={card.id} mark={card.mark} color={card.color} />//カードの表面
          ) : (
            <Card id={0} mark={card.mark} color={card.color} />//カードの裏面
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
