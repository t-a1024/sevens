import "./5.css";

interface mark{
    mark:string
}

export const Card5 = ({mark}:mark): JSX.Element => {
    return (
    <div className="element5">
        <div className="text5">{mark}</div>
        <div className="text5">{mark}</div>
        <div className="text5" id="rotate">{mark}</div>
        <div className="text5" id="rotate">{mark}</div>
        <div className="centerText5">{mark}</div>
    </div>
    )
}