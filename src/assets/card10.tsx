import "./10.css";

interface mark{
    mark:string
}

export const Card10 = ({mark}:mark): JSX.Element => {
    return (
    <div className="element10">
        <div className="text10">{mark}</div>
        <div className="text10">{mark}</div>
        <div className="text10">{mark}</div>
        <div className="text10">{mark}</div>
        <div className="text10" id="rotate">{mark}</div>        
        <div className="text10" id="rotate">{mark}</div>        
        <div className="text10" id="rotate">{mark}</div>
        <div className="text10" id="rotate">{mark}</div>
        <div className="box10">
            <div className="text-wrapper10">{mark}</div>
            <div className="div10">{mark}</div>
        </div>
    </div>
    )
}