//import { Card } from "../assets/cardData";
import { markData } from "../assets/markData";
import { Board, CardSituation ,findCardByIdAndMark} from "./board";

export class Player {
  private _hand: CardSituation[] = [];
  name: string;
  board:Board;
  canUseCard:boolean = true;

  constructor(name: string,board:Board) {
    this.name = name;
    this.board = board;
  }

  set hand(v: CardSituation[]) {
    this._hand = v;
    markData.filter(mark=>mark.label!=="♦").forEach((mark)=>{
      const pre = findCardByIdAndMark(this.hand,7,mark.label);
      if (pre) {
        this.board.useCard(pre,this)
      }
    })
    markData.filter(mark=>mark.label==="♦").forEach(mark=>{
        const pre = findCardByIdAndMark(this.hand,7,mark.label);
        if (pre) {
          this.board.useCard(pre,this);
        }
      })
    this._hand = this._hand.filter((c)=>!(c.id===7));
  }

  get hand(): CardSituation[] {
    return this._hand;
  }

  useCard(card:CardSituation){
    if (this.canUseCard&&this.board.useCard(card,this)) {
        this.hand = this.hand.filter(cards => !(card.id === cards.id && card.mark === cards.mark));
        console.log("used" + card);
        this.canUseCard = false;
    }
  }

  setTurn(){
    this.canUseCard = true;
  }

  pass(){
    if (this.canUseCard) {
        this.canUseCard = false;
        this.board.advanceTurn();   
    }
  }

  getName(){
    return this.name;
  }
  
}
