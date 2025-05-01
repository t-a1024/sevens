import { useState, useEffect, useRef } from 'react';
import Card from "./assets/cardCompornents";
import { CardData } from "./assets/cardData";
import { markData } from "./assets/markData";
import './App.css'; 

function shuffleArray(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

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
  const [gameMode, setGameMode] = useState<'single' | 'multi' | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [scores, setScores] = useState([0, 0]); // To track scores in multiplayer mode
  const [cards, setCards] = useState<ShuffledCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [moveCount, setMoveCount] = useState(0); 
  const [scale, setScale] = useState(1); 
  const [width, setWidth] = useState(100);
  const appRef = useRef<HTMLDivElement>(null);
  const [alertFlag, setAlertFlag] = useState(false);
  const playerColors = ['green', 'skyblue']; // Player 1: green, Player 2: skyblue
  useEffect(() => {
    reset();
  }, []);

  function reset() {
    const filteredCardData = CardData.filter(card => card.id !== 0);
    const combinedData = filteredCardData.flatMap(card =>
      markData.map(mark => ({
        ...card,
        mark: mark.label,
        color: mark.color,
        isFlipped: false,
        isMatched: false,
      }))
    );
    const shuffledData = shuffleArray(combinedData);
    setCards(shuffledData);
    setMoveCount(0);
    setMatchedCount(0);
    setFlippedCards([]);
    setCurrentPlayer(1); 
    setScores([0, 0]); 
  }

  // 画面サイズに応じてスケールを設定
  useEffect(() => {
    const updateScale = () => {
      if (appRef.current) {
        const appWidth = appRef.current.offsetWidth;
        const appHeight = appRef.current.offsetHeight;
  
        const widthScale = window.innerWidth / appWidth;
        const heightScale = window.innerHeight / appHeight;
  
        if (widthScale <= heightScale) {
          if (appWidth > window.innerWidth) {
            setScale(widthScale);
            alertScale();
          } else {
            setScale(heightScale);
            setWidth(100 * (widthScale / heightScale));
          }
        } else {
          setScale(heightScale);
          setWidth(100 * (widthScale / heightScale));
        }
      }
    };
    setTimeout(updateScale, 0);
    window.addEventListener('resize', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, [alertScale, appRef]);

  const handleCardClick = (index: number) => {
    if (cards[index].isFlipped || cards[index].isMatched || flippedCards.length === 2) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;
      setMoveCount(moveCount + 1);

      if (newCards[firstIndex].str === newCards[secondIndex].str) {
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setCards(newCards);
        setFlippedCards([]);
        setMatchedCount(matchedCount + 2);

        if (gameMode === 'multi') {
          const newScores = [...scores];
          newScores[currentPlayer - 1] += 1; 
          setScores(newScores);
        }

      } else {
        setTimeout(() => {
          newCards[firstIndex].isFlipped = false;
          newCards[secondIndex].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);

          if (gameMode === 'multi') {
            setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
          }
        }, 1000);
      }
    }
  };

  // ゲームクリアの判定
  useEffect(() => {
    if (matchedCount === cards.length && cards.length > 0) {
      if (gameMode === 'multi') {
        const winner =
          scores[0] > scores[1]
            ? 'Player 1 wins!'
            : scores[1] > scores[0]
            ? 'Player 2 wins!'
            : "draw";
        alert(winner);
      } else {
        alert(`クリアおめでとうございます！  手数:  ${moveCount}`);
      }
    }
  }, [matchedCount, cards, gameMode, scores, moveCount]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function alertScale() {
    if (!alertFlag) {
      setAlertFlag(a => !a);
      alert("このゲームは横画面推奨です");
    }
  }

  if (!gameMode) {
    return (
      <div className="bg_pattern1 Paper_v2">
        <div className="start-screen">
          <h1>神経衰弱
          </h1>
          <div>
            <button onClick={() => setGameMode('single')}>一人プレイ</button>
            <button onClick={() => setGameMode('multi')}>二人プレイ</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg_pattern1 Paper_v2">
      <div className="App" style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <div className='autoScale' ref={appRef} style={{ minWidth: `${width}vw` }}>
        {gameMode === 'single' && (
          <>
            <h3>手数: {moveCount}</h3>
            <h3>残り: {(52 - matchedCount) / 2}</h3>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {matchedCount === 52 ? (
              <button onClick={reset}>もう一度プレイ</button>
            ) : (
              <div></div>
            )}
          </>
        )}
        {gameMode === 'multi' && (
          <>
            <p style={{ color: 'green' }}>Player 1: {scores[0]}</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p style={{ color: playerColors[currentPlayer - 1],fontSize: '24px', fontWeight: 'bold'}}>Player{currentPlayer}</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {matchedCount === 52 ? (
              <button onClick={reset}>もう一度プレイ</button>
            ) : (
              <p style={{ color: 'deepblue' }}>Player 2: {scores[1]}</p>
            )}
          </>
        )}
          {cards.map((card, index) => (
            <div key={index} style={{ margin: "10px" }} onClick={() => handleCardClick(index)} className={`card ${card.isFlipped ? 'flipped' : 'unflipped'}`}>
              {card.isMatched ? (
                <Card id={card.id} mark={card.mark} color={card.color} outlineColor='black' />
              ) : card.isFlipped ? (
                <Card id={card.id} mark={card.mark} color={card.color} outlineColor={gameMode === 'multi' ? playerColors[currentPlayer - 1] : 'greenyellow'}/>
              ) : (
                <Card id={0} mark={card.mark} color={card.color} outlineColor='black' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
