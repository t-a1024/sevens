import "./7.css";

interface mark{
    mark:string
}

export const Card7 = ({mark}:mark): JSX.Element => {
    return (
    <div className="element7">
        <div className="text7">{mark}</div>
        <div className="text7">{mark}</div>
        <div className="text7">{mark}</div>
        <div className="text7" id="rotate">{mark}</div>        
        <div className="text7" id="rotate">{mark}</div>
        <div className="text7" id="rotate">{mark}</div>
        <div className="sevensCenter">{mark}</div>
    </div>
    )
}