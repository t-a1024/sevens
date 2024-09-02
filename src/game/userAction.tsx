import { Manager } from "./manager";
export class action{
    playerName:string;
    manager:Manager;

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

    sendMessage(message:string){//PC側にメッセージを送りたい
        console.log(message);
        return this.manager.getMessageByPlayer(message);
    }
}