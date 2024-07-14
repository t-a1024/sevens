import "./3.css";

interface mark{
    mark:string
}

export const Card3 = ({mark}:mark):  JSX.Element => {
    return (
        <div className="box3">
            <div className="element3">
                <div className="mark3">{mark}</div>
                <div className="mark3">{mark}</div>
                <div className="mark3"id="rotate">{mark}</div>
            </div>
        </div>
    )
}