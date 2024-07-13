import React from 'react';
import './card.css';

interface CardProps {
    str: string; // 型をstringに変更
}

export default function Card({ str }: CardProps) { // 型を指定
  return (
    <div className="card">
      <div className="overlap-group">
        <div className="text-wrapper">{str}</div>
        <div className="div">{str}</div>
        <div className="group" />
      </div>
    </div>
  );
}
