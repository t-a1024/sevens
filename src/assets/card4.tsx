import "./4.css";

interface mark{
    mark:string
    color:string
}

export const Card4 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element4">
        <div className="text4" style={{ color: color }}>{mark}</div>
        <div className="text4" style={{ color: color }}>{mark}</div>
        <div className="text4" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text4" id="rotate" style={{ color: color }}>{mark}</div>
    </div>
    )
}