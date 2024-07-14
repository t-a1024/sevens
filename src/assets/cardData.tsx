import { ALabel } from "./A";
import { Card2 } from "./card2";
import { Card3 } from "./card3";

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
    }
];
