//import { Card } from "../assets/cardData";
import { CardSituation } from "./board";

export class Player {
  private _hand: CardSituation[] = [];
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  set hand(v: CardSituation[]) {
    this._hand = v;
  }

  get hand(): CardSituation[] {
    return this._hand;
  }

  useCard(card:CardSituation){

  }

  getName(){
    return this.name;
  }
}
