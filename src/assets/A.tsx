import React from "react";
import "./A.css";

interface mark{
    mark:string
    color:string
}

export const ALabel = ({ mark,color}:mark): JSX.Element => {
  return (
    <div className="Alabel">
      <div className="text-wrapperA" style={{ color: color }}>{mark}</div>
    </div>
  );
};