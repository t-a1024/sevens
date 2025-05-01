import "./7.css";

interface mark{
    mark:string
    color:string
}

export const Card7 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element7">
        <div className="text7" style={{ color: color }}>{mark}</div>
        <div className="text7" style={{ color: color }}>{mark}</div>
        <div className="text7" style={{ color: color }}>{mark}</div>
        <div className="text7" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text7" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text7" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="sevensCenter" style={{ color: color }}>{mark}</div>
    </div>
    )
}