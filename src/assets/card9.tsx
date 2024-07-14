import "./9.css";

interface mark{
    mark:string
    color:string
}

export const Card9 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element9">
        <div className="text9" style={{ color: color }}>{mark}</div>
        <div className="text9" style={{ color: color }}>{mark}</div>
        <div className="text9" style={{ color: color }}>{mark}</div>
        <div className="text9" style={{ color: color }}>{mark}</div>
        <div className="text9" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text9" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text9" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text9" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="card9Center" style={{ color: color }}>{mark}</div>
    </div>
    )
}