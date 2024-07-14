import "./CardBack.css";

interface mark{
    mark:string
    color:string
}

export default function Back({mark,color}:mark) {
    return (
	<div className="bg_pattern Rhombus"></div>
    );
  }