import React from "react";
import "./2.css";
interface mark{
    mark:string
    color:string
}

export const Card2 = ({mark,color}:mark): JSX.Element => {
  return (
    <div className="box2">
      <div className="element2">
        <div className="text-wrapper" style={{ color: color }}>{mark}</div>
        <div className="div2" style={{ color: color }}>{mark}</div>
      </div>
    </div>
  );
};