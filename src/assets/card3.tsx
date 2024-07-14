import "./3.css";

interface mark{
    mark:string
}

export const Card3 = ({mark}:mark):  JSX.Element => {
    return (
        <div className="box">
            <div className="element">
                <div className="mark3">{mark}</div>
                <div className="mark3">{mark}</div>
                <div className="mark3"id="rotate">{mark}</div>
            </div>
        </div>
    )
}