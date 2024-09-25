import React from 'react';
import './card.css';
import { CardData } from './cardData';

interface CardProps {
    id: number;
    mark: string;
    color: string;
    outlineColor: string; // 外枠の色を受け取るプロパティ
}

export default function Card({ id, mark, color, outlineColor }: CardProps) {
  // idに対応するラベルコンポーネントをCardDataから取得
  const cardInfo = CardData.find(card => card.id === id);
  const LabelComponent = cardInfo ? cardInfo.label : null;

  return (
    <div className="cardBox" style={{ background: "#eaf4fc", outline: `solid ${outlineColor}` }}>
      <div className="text-wrapper" style={{ color: color }}>{cardInfo ? cardInfo.str : 'Unknown'}</div>
      <div className="div" style={{ color: color }}>{cardInfo ? cardInfo.str : 'Unknown'}</div>
      <div className="group">
        {LabelComponent && <LabelComponent mark={mark} color={color}/>}
      </div>
    </div>
  );
}
