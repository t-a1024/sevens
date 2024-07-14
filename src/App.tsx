import  Card  from "./assets/cardCompornents";
function App() {
  return (
    <div className="App">
      <Card str={"A"} mark="♠"/>
      <br />
      <Card str={"A"} mark="♣"/>
    </div>
  );
}

export default App;
/* スペード：&spades; → ♠ (U+2660)
クラブ：&clubs; → ♣ (U+2663)
ダイヤ：&diams; → ♦ (U+2666)
ハート：&hearts; → ♥ (U+2665) */