import React from 'react';
import './card.css';
import { CardData } from './cardData'; // インポートを追加

interface CardProps {
    id: number;
    mark: string;
}

export default function Card({ id, mark }: CardProps) {
  // idに対応するラベルコンポーネントをCardDataから取得
  const cardInfo = CardData.find(card => card.id === id);
  const LabelComponent = cardInfo ? cardInfo.label : null;

  return (
    <div className="card">
      <div className="overlap-group">
        <div className="text-wrapper">{cardInfo ? cardInfo.str : 'Unknown'}</div>
        <div className="div">{cardInfo ? cardInfo.str : 'Unknown'}</div>
        <div className="group">
          {LabelComponent && <LabelComponent mark={mark} />} {/* ラベルコンポーネントをレンダー */}
        </div>
      </div>
    </div>
  );
}
