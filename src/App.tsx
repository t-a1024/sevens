import React from 'react';
import Card from "./assets/cardCompornents";
import { CardData } from "./assets/cardData";
import { markData } from "./assets/markData";

// 配列をシャッフルする関数を定義
function shuffleArray(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function App() {
  // CardDataからidが0のカードを取り除く
  const filteredCardData = CardData.filter(card => card.id !== 0);

  // CardDataとmarkDataの組み合わせを作成
  const combinedData = filteredCardData.flatMap(card =>
    markData.map(mark => ({
      ...card,
      mark: mark.label,
      color: mark.color
    }))
  );

  // シャッフルされたカードデータ
  const shuffledData = shuffleArray(combinedData);

  return (
    <div className="App">
      {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
        {shuffledData.map((card, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <Card id={card.id} mark={card.mark} color={card.color} />
          </div>
        ))}
      </div> */}
      <Card id={10} mark={'♠'} color={'red'}></Card>
    </div>
  );
}

export default App;
