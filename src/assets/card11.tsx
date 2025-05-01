import "./11.css";

interface mark{
    mark:string
    color:string
}

export const Card11 = ({mark,color}:mark): JSX.Element => {
    return (
    <div className="element11">
        <div className="text11" style={{ color: color }}>{mark}</div>
        <div className="text11" style={{ color: color }}>{mark}</div>
        <div className="text11" style={{ color: color }}>{mark}</div>
        <div className="text11" style={{ color: color }}>{mark}</div>
        <div className="text11" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text11" id="rotate" style={{ color: color }}>{mark}</div>        
        <div className="text11" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="text11" id="rotate" style={{ color: color }}>{mark}</div>
        <div className="box11">
            <div className="text-wrapper11" style={{ color: color }}>{mark}</div>
            <div className="div11" style={{ color: color }}>{mark}</div>
        </div>
        <div className="textCenter11" style={{ color: color }}>{mark}</div>
    </div>
    )
}