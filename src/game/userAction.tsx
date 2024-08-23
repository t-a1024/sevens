import { Manager } from "./manager";
export class action{
    playerName:string;
    manager:Manager;
    hand:string = '0:0';

    constructor(name:string,manager:Manager){
        this.playerName = name;
        this.manager = manager
        this.manager.JoinPlayer(this.playerName)
    }

    useCard(card:string):boolean {
        //'use'+this.playerName+':'+cardを送る
        this.sendMessage(this.playerName+':'+card);
        return false;
    }

    pass():boolean{
        //'use'+this.playerName+':0:0'を送る
        return false;
    }

    sendMessage(message:string){
        console.log(message);
        return this.manager.getMessageByPlayer(message);
    }

    gameStart(myHand:string){
        this.hand = myHand;
    }

    getHand(){
        return this.hand;
    }

    handToArray(myHand:string){
        return myHand.split('/');
    }

    // logIn():boolean{

    //     return false;
    // }
}