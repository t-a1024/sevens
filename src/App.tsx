import  { useState, useEffect, useRef } from 'react';
import Card from "./assets/cardCompornents";
import { CardData } from "./assets/cardData";
import { markData } from "./assets/markData";
import './App.css'; // CSSファイルをインポート

// 配列をシャッフルする関数を定義
function shuffleArray(array: any[]) {
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
  const [scale, setScale] = useState(1); // スケール状態を追加
  const [width, setWidth] = useState(100);
  const appRef = useRef<HTMLDivElement>(null); // refを作成

  // 初期化処理
  useEffect(() => {
    reset();
  }, []);

  function reset() {
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
    setMoveCount(0);
    setMatchedCount(0);
  }

  // 画面サイズに応じてスケールを設定
  useEffect(() => {
    const updateScale = () => {
      if (appRef.current) {
        const appWidth = appRef.current.offsetWidth;
        const appHeight = appRef.current.offsetHeight;
        console.log(appWidth);
        console.log(appHeight);
        
        const widthScale = window.innerWidth / appWidth;
        const heightScale = window.innerHeight / appHeight;
        console.log(widthScale);
        console.log(heightScale);
        if (appWidth>window.innerWidth) {
          alert("このゲームは横画面推奨です。")
          setScale(widthScale)
        }else{
          setScale(heightScale)
          setWidth(100*(widthScale/heightScale))
          console.log(width)
        }
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateScale();
    });

    if (appRef.current) {
      resizeObserver.observe(appRef.current);
    }

    window.addEventListener('resize', updateScale);
    
    // 最初のレンダリング後にスケールを計算
    setTimeout(updateScale, 0);

    return () => {
      window.removeEventListener('resize', updateScale);
      if (appRef.current) {
        resizeObserver.unobserve(appRef.current);
      }
    };
  }, []);

  // カードをクリックしたときの処理
  const handleCardClick = (index: number) => {
    if (cards[index].isFlipped || cards[index].isMatched || flippedCards.length === 2) {
      return;
    }
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;
      setMoveCount(moveCount + 1); // カードをクリックするたびに手数を増加
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
      alert("クリアおめでとうございます！  手数: " + moveCount);
    }
  }, [matchedCount, cards]);

  return (
    <div className="bg_pattern1 Paper_v2">  
      <div className="App" style={{ transform: `scale(${scale})`, transformOrigin: 'top left'}}>
        <div className='autoScale' ref={appRef} style={{ minWidth: `${width}vw`}}>
          <h3>手数: {moveCount}</h3>
          <h3>残り: {(52-matchedCount)/2}</h3><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          {matchedCount==52 ? (<button onClick={reset}>もう一度</button>):(<div></div>)}
          {cards.map((card, index) => (
            <div key={index} style={{ margin: "10px" }} onClick={() => handleCardClick(index)} className={`card ${card.isFlipped ? 'flipped' : 'unflipped'}`}>
              {card.isMatched ? (
                // 1. card.isMatched が true の場合（カードがペアとしてマッチした状態）
                <Card id={card.id} mark={card.mark} color={card.color} outlineColor='black' />
              ) : card.isFlipped ? (
                // 2. card.isFlipped が true の場合（カードがめくられている状態）
                <Card id={card.id} mark={card.mark} color={card.color} outlineColor='greenyellow'/>
              ) : (
                // 3. どちらも false の場合（カードが裏返しの状態）
                <Card id={0} mark={card.mark} color={card.color} outlineColor='black'/>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
