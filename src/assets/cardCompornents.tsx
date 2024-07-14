import React from 'react';
import './card.css';
import { ALabel } from "./A";

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
        <ALabel mark={mark}/>
        </div>
        {/* <div className="ALabel-container">
          <ALabel mark={mark}/>
        </div> */}
      </div>
    </div>
  );
}
