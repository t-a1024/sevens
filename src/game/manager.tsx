import { Board , findCardByIdAndMark } from "./board";
import { Player } from "./player";

export class Manager{
    board:Board=new Board();
    playerList:Player[] = [];
    gameStarted:boolean = false;
    prePlayerList:string[] = [];
    // constructor(board:Board,playerList:Player[]){
    //     this.board = board;
    //     this.playerList = playerList;
    // }

    JoinPlayer(playerName:string){
        if (this.gameStarted) {
            return false;
        }else{
            this.prePlayerList.push(playerName);
            this.prePlayerList = this.prePlayerList.filter(n=>n!=="")
            console.log(this.prePlayerList)
        }
        
    }

    startGame(){
        if (this.gameStarted) {
            return;
        }
        this.board = new Board();
        this.playerList = this.prePlayerList.map(name=>new Player(name,this.board));
        try {
            this.board.gameStart(this.playerList);
            this.gameStarted = true;
        } catch (error) {
            console.log(error);
        }
    }

    getMessageByPlayer(message:string){
        this.useCardByPlayer(message)
        /* console.log(message)
        if (/^use/.test(message)) {
            return this.useCardByPlayer(message.replace(/^use/,message))
        }else if (/^logOut/.test(message)) {
            return false;
        } */
    }

    useCardByPlayer(sendData:string){
        const name:string = sendData.split(":")[0]
        const id:number = Number(sendData.split(":")[1])
        const mark:string = sendData.split(":")[2]
        const player = this.playerList.find(p=>p.getName()===name);
        if (id===0&&mark==='0') {
            player?.pass()
            return true;
        }
        const card = findCardByIdAndMark(this.board.getboard,id,mark);
        if (player&&card) {
            if (player.useCard(card)) {
                return true
            }
        }
        return false;
    }

    getPlayerHand(playerName:string):string{
        const returnData = this.playerList.find(p=>p.getName()===playerName)?.handToString();
        if (returnData) {
            return returnData;
        }else{
            return '-1';
        }
    }

    getBoard(){
        return this.board;
    }
}