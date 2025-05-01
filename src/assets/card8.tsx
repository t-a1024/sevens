import "./8.css";

interface mark{
    mark:string
    color:string
}

export const Card8 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element8">
        <div className="text8" style={{ color: color }}>{mark}</div>
        <div className="text8" style={{ color: color }}>{mark}</div>
        <div className="text8" style={{ color: color }}>{mark}</div>
        <div className="text8" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text8" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text8" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="box8">
            <div className="text-wrapper8" style={{ color: color }}>{mark}</div>
            <div className="div8" style={{ color: color }}>{mark}</div>
        </div>
    </div>
    )
}