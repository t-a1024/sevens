import React from "react";
import "./2.css";
interface mark{
    mark:string
}

export const Card2 = ({mark}:mark): JSX.Element => {
  return (
    <div className="box2">
      <div className="element2">
        <div className="text-wrapper">{mark}</div>
        <div className="div2">{mark}</div>
      </div>
    </div>
  );
};