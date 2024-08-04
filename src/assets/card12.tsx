import "./12.css";

interface mark{
    mark:string
    color:string
}

export const Card12 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element12">
        <div className="text12" style={{ color: color }}>{mark}</div>
        <div className="text12" style={{ color: color }}>{mark}</div>
        <div className="text12" style={{ color: color }}>{mark}</div>
        <div className="text12" style={{ color: color }}>{mark}</div>
        <div className="text12" style={{ color: color }}>{mark}</div>
        <div className="text12" style={{ color: color }}>{mark}</div>
        <div className="text12" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text12" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text12" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text12" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text12" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text12" id="rotate" style={{ color: color }}>{mark}</div>
    </div>
    )
}