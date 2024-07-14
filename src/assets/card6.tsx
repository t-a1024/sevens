import "./6.css";

interface mark{
    mark:string
    color:string
}

export const Card6 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element6">
        <div className="text6" style={{ color: color }}>{mark}</div>
        <div className="text6" style={{ color: color }}>{mark}</div>
        <div className="text6" style={{ color: color }}>{mark}</div>
        <div className="text6" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text6" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text6" id="rotate" style={{ color: color }}>{mark}</div>
    </div>
    )
}