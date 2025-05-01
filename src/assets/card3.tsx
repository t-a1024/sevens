import "./3.css";

interface mark{
    mark:string
    color:string
}

export const Card3 = ({mark,color}:mark):  JSX.Element => {
    return (
        <div className="box3">
            <div className="element3">
                <div className="mark3" style={{ color: color }}>{mark}</div>
                <div className="mark3" style={{ color: color }}>{mark}</div>
                <div className="mark3"id="rotate" style={{ color: color }}>{mark}</div>
            </div>
        </div>
    )
}