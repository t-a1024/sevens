import React from 'react';
import './card.css';
import { ALabel } from "./A";
import { Card2 } from "./card2";
import { Card3 } from './card3';

interface CardProps {
    str: string;
    mark:string;
}


export default function Card({ str,mark }: CardProps) { // 型を指定
  return (
    <div className="card">
      <div className="overlap-group">
        <div className="text-wrapper">{str}</div>
        <div className="div">{str}</div>
        <div className="group">
        {/* <ALabel mark={mark}/> */}
          <ALabel mark={mark}/>
        </div>
      </div>
    </div>
  );
}
