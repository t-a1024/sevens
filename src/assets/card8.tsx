import "./8.css";

interface mark{
    mark:string
}

export const Card8 = ({mark}:mark): JSX.Element => {
    return (
    <div className="element8">
        <div className="text8">{mark}</div>
        <div className="text8">{mark}</div>
        <div className="text8">{mark}</div>
        <div className="text8" id="rotate">{mark}</div>        
        <div className="text8" id="rotate">{mark}</div>
        <div className="text8" id="rotate">{mark}</div>
        <div className="box8">
            <div className="text-wrapper8">{mark}</div>
            <div className="div8">{mark}</div>
        </div>
    </div>
    )
}