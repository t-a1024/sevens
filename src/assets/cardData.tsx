import { ALabel } from "./A";
import { Card2 } from "./card2";
import { Card3 } from "./card3";
import { Card4 } from "./card4";
import { Card5 } from "./card5";
import { Card6 } from "./card6";
import { Card7 } from "./card7";

export interface Card {
    id: number;
    str: string;
    label: any;
}

export const CardData: Card[] = [
    {
        id: 1,
        str: "A",
        label: ALabel
    },
    {
        id: 2,
        str: "2",
        label: Card2
    },
    {
        id: 3,
        str: "3",
        label: Card3
    },
    {
        id: 4,
        str: "4",
        label: Card4
    },
    {
        id: 5,
        str: "5",
        label: Card5
    },
    {
        id: 6,
        str: "6",
        label: Card6
    },
    {
        id: 7,
        str: "7",
        label: Card7
    }
];
