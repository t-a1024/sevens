import "./13.css";

interface mark{
    mark:string
    color:string
}

export const Card13 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element13">
        <div className="text13" style={{ color: color }}>{mark}</div>
        <div className="text13" style={{ color: color }}>{mark}</div>
        <div className="text13" style={{ color: color }}>{mark}</div>
        <div className="text13" style={{ color: color }}>{mark}</div>
        <div className="text13" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text13" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text13" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text13" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="box13">
            <div className="text-wrapper13" style={{ color: color }}>{mark}</div>
            <div className="div13" style={{ color: color }}>{mark}</div>
        </div>
        <div className="CenterLine13">
            <div style={{ color: color }}>{mark}</div>
            <div style={{ color: color }}>{mark}</div>
            <div id="rotate" style={{ color: color }}>{mark}</div>
        </div>
    </div>
    )
}