export interface mark{
    id: number
    label: string
    color: string
}

export const markData: mark[] = [{
    id:1,
    label: "♠",
    color: "black"
},
{
    id:2,
    label: "♣",
    color: "black"
},
{
    id:3,
    label: "♦",
    color: "red"
},
{
    id:2,
    label: "♥",
    color: "red"
},];
/* スペード：&spades; → ♠ (U+2660)
クラブ：&clubs; → ♣ (U+2663)
ダイヤ：&diams; → ♦ (U+2666)
ハート：&hearts; → ♥ (U+2665) */