import  Card  from "./assets/cardCompornents";
function App() {
  return (
    <div className="App">
      <Card id={1} mark="♠"/>
      <br />
      <Card id={2} mark="♠"/>
      <br />
      <Card id={3} mark="♣"/>
      <br />
      <Card id={4} mark="♣"/>
      <br />
      <Card id={5} mark="♦"/>
      <br />
      <Card id={6} mark="♥"/>
    </div>
  );
}

export default App;
/* スペード：&spades; → ♠ (U+2660)
クラブ：&clubs; → ♣ (U+2663)
ダイヤ：&diams; → ♦ (U+2666)
ハート：&hearts; → ♥ (U+2665) */