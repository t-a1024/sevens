import React from 'react';
import './card.css';
import { CardData } from './cardData'; // 必要なインポートのみを維持

interface CardProps {
    id: number;
    mark: string;
    color: string;
}

export default function Card({ id, mark, color }: CardProps) {
  // idに対応するラベルコンポーネントをCardDataから取得
  const cardInfo = CardData.find(card => card.id === id);
  const LabelComponent = cardInfo ? cardInfo.label : null;

  return (
    <div className="card" style={{background: "#eaf4fc"}}>
      <div className="text-wrapper" style={{ color: color }}>{cardInfo ? cardInfo.str : 'Unknown'}</div>
      <div className="div" style={{ color: color }}>{cardInfo ? cardInfo.str : 'Unknown'}</div>
      <div className="group">
        {LabelComponent && <LabelComponent mark={mark} color={color}/>}
      </div>
    </div>
  );
}
