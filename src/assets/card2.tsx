import React from "react";
import "./2.css";
interface mark{
    mark:string
}

export const Card2 = ({mark}:mark): JSX.Element => {
  return (
    <div className="box">
      <div className="element">
        <div className="text-wrapper">{mark}</div>
        <div className="div">{mark}</div>
      </div>
    </div>
  );
};