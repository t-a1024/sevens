import { Card, CardData } from "../assets/cardData";
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
  players: Player[];
  board: CardSituation[] = [];

  constructor(players: Player[]) {
    this.players = players;
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
    this.players.forEach(player=>{
        player.hand = this.board.filter(card=>card.owner.name==player.name).map(cardData => cardData)
    });
  }
}

export { Board };    export type { CardSituation };

