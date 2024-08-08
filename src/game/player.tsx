//import { Card } from "../assets/cardData";
import { Board, CardSituation ,findCardByIdAndMark} from "./board";

export class Player {
  private _hand: CardSituation[] = [];
  name: string;
  board:Board;

  constructor(name: string,board:Board) {
    this.name = name;
    this.board = board
  }

  set hand(v: CardSituation[]) {
    this._hand = v;
  }

  get hand(): CardSituation[] {
    return this._hand;
  }

  useCard(card:CardSituation){
    if (this.board.useCard(card,this)) {
        this.hand = this.hand.filter(cards => !(card.id === cards.id && card.mark === cards.mark));
        console.log("used" + card);
    }
  }

  getName(){
    return this.name;
  }
}
