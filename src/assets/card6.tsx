import "./6.css";

interface mark{
    mark:string
}

export const Card6 = ({mark}:mark): JSX.Element => {
    return (
    <div className="element6">
        <div className="text6">{mark}</div>
        <div className="text6">{mark}</div>
        <div className="text6">{mark}</div>
        <div className="text6" id="rotate">{mark}</div>        
        <div className="text6" id="rotate">{mark}</div>
        <div className="text6" id="rotate">{mark}</div>
    </div>
    )
}