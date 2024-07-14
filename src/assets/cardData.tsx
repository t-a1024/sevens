import { ALabel } from "./A";
import { Card2 } from "./card2";

export interface card{
    id:number,
    str:string,
    mark:any,
}

export const CardData:card[] = [{
    id: 1,
    str: "A",
    mark: ALabel
},
{
    id: 2,
    str: "2",
    mark: Card2
}]