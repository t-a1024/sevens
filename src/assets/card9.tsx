import "./9.css";

interface mark{
    mark:string
}

export const Card9 = ({mark}:mark): JSX.Element => {
    return (
    <div className="element9">
        <div className="text9">{mark}</div>
        <div className="text9">{mark}</div>
        <div className="text9">{mark}</div>
        <div className="text9">{mark}</div>
        <div className="text9" id="rotate">{mark}</div>        
        <div className="text9" id="rotate">{mark}</div>
        <div className="text9" id="rotate">{mark}</div>
        <div className="text9" id="rotate">{mark}</div>
        <div className="card9Center">{mark}</div>
    </div>
    )
}