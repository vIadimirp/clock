import CircularClock from "./circularClock/circularClock";
import NumeralClock from "./numeralClock/numeralClock";

import "./main.css";


export default function Main({now, nextTheme}) {

    return (
        <div className="main" onClick={nextTheme}>
            <CircularClock now={now} />
            <NumeralClock now={now} />
        </div>
    );

}
