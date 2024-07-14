import React from "react";
import "./A.css";

interface mark{
    mark:string
}

export const ALabel = ({ mark }:mark): JSX.Element => {
  return (
    <div className="Alabel">
      <div className="text-wrapperA">{mark}</div>
    </div>
  );
};