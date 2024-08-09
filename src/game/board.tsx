import { CardData } from "../assets/cardData";
import { markData } from "../assets/markData";
import { Player } from "./player";

interface CardSituation {
  id: number;
  mark: string;
  color: string;
  owner: Player;
  situation: boolean;
}

// 配列をシャッフルする関数を定義
function shuffleArray(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

class Board {
  players: Player[] = [];
  board: CardSituation[] = [];
  nowPlayer:number = 0;
  constructor(){
    console.log("new Board");
    
  }

  gameStart(players: Player[]) {
    this.players = players;
    this.players = shuffleArray(players);
    if (players.length <= 1) {
      throw new Error("プレイヤーの人数は2人以上必要です");
    }

    // カードデータを初期化
    const cardData = markData.flatMap(mark =>
      CardData.filter(card => card.id !== 0).map(card => ({
        ...card,
        mark: mark.label,
        color: mark.color
      }))
    );

    // カードをシャッフル
    const shuffledCards = shuffleArray(cardData);

    // カードをプレイヤーにランダムで均等に割り当てる
    shuffledCards.forEach((card, index) => {
      this.board.push({
        id: card.id,
        mark: card.mark,
        color: card.color,
        owner: players[index % players.length],
        situation: false
      });
    });
    this.board = this.board.sort((a, b) => a.id - b.id).sort((a, b) => a.mark.localeCompare(b.mark));
    this.setPlayerHand();
    
  }

  get getboard() {
    return this.board;
  }

  setPlayerHand(){
    this.players.forEach((player,index)=>{
        player.hand = this.board.filter(card=>card.owner.name===player.name).map(cardData => cardData)
        const precard = findCardByIdAndMark(this.board,7,"♦")
        if (precard&&precard.owner.name === player.name) {
          player.setTurn();
          this.nowPlayer = index;
        }
    });
  }

  GetCanPlaceCard(): CardSituation[] {
    const returnData: CardSituation[] = [];

    for (let index = 0; index < markData.length; index++) {
      const mark = markData[index].label;

      for (let index2 = 7; index2 <= 13; index2++) {
        const card = this.findCard(index2, mark);
        if (card && !card.situation) {
          returnData.push(card);
          break;
        }
      }

      for (let index2 = 7; index2 >= 1; index2--) {
        const card = this.findCard(index2, mark);
        if (card && !card.situation) {
          returnData.push(card);
          break;
        }
      }
    }

    return returnData;
  }

  useCard(card: CardSituation, player: Player):boolean {
    const playableCard = findCardByIdAndMark(this.GetCanPlaceCard(), card.id, card.mark);

    if (playableCard) {
      const targetCard = this.board.find(cards => card.id === cards.id && card.mark === cards.mark);
      if (targetCard&&targetCard.owner.getName===player.getName) {
        targetCard.situation = true;
        this.advanceTurn();
        return true;
      }
    }
    return false;
  }

  findCard(id:number,mark:string){
    return findCardByIdAndMark(this.board,id,mark);
  }

  advanceTurn(){
    this.nowPlayer++;
    this.players[this.nowPlayer%this.players.length].setTurn();
    console.log(this.players[this.nowPlayer%this.players.length].getName());
  }

  getNowPlayerName(){
    return this.players[this.nowPlayer%this.players.length];
  }
}

function findCardByIdAndMark(cards: CardSituation[], id: number, mark: string): CardSituation | undefined {
  return cards.find(card => card.id === id && card.mark === mark);
}

export { Board ,findCardByIdAndMark};    export type { CardSituation };

