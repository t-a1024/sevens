import  Card  from "./assets/cardCompornents";
import { CardData } from "./assets/cardData";
function App() {
  return (
    <div className="App">
      {CardData.map(card => (
        <div key={card.id}>
          <Card id={card.id} mark="♠" color="red" />
          <br />
        </div>
      ))}
      {/* ここでCardDataの中のカード全部を表示したい mark="♠"で*/}
{/*       <Card id={2} mark="♠"/>
      <br />
      <Card id={3} mark="♣"/>
      <br />
      <Card id={4} mark="♣"/>
      <br />
      <Card id={5} mark="♦"/>
      <br />
      <Card id={10} mark="♠"/> */}
    </div>
  );
}

export default App;
/* スペード：&spades; → ♠ (U+2660)
クラブ：&clubs; → ♣ (U+2663)
ダイヤ：&diams; → ♦ (U+2666)
ハート：&hearts; → ♥ (U+2665) */