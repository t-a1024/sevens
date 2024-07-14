import "./4.css";

interface mark{
    mark:string
}

export const Card4 = ({mark}:mark): JSX.Element => {
    return (
    <div className="element4">
        <div className="text4">{mark}</div>
        <div className="text4">{mark}</div>
        <div className="text4" id="rotate">{mark}</div>
        <div className="text4" id="rotate">{mark}</div>
    </div>
    )
}