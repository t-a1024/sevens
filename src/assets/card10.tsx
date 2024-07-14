import "./10.css";

interface mark{
    mark:string
    color:string
}

export const Card10 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element10">
        <div className="text10" style={{ color: color }}>{mark}</div>
        <div className="text10" style={{ color: color }}>{mark}</div>
        <div className="text10" style={{ color: color }}>{mark}</div>
        <div className="text10" style={{ color: color }}>{mark}</div>
        <div className="text10" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text10" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text10" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text10" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="box10">
            <div className="text-wrapper10" style={{ color: color }}>{mark}</div>
            <div className="div10" style={{ color: color }}>{mark}</div>
        </div>
    </div>
    )
}