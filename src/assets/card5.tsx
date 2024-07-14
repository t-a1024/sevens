import "./5.css";

interface mark{
    mark:string
    color:string
}

export const Card5 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element5">
        <div className="text5" style={{ color: color }}>{mark}</div>
        <div className="text5" style={{ color: color }}>{mark}</div>
        <div className="text5" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text5" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="centerText5" style={{ color: color }}>{mark}</div>
    </div>
    )
}