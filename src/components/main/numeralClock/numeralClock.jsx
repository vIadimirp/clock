import { format } from "date-fns";

import "./numeralClock.css";


export default function NumeralClock({now}) {

    let toLength = (s, l) => "0".repeat(l - s.toString().length) + s.toString();

    let weekDay = `${format(now, "cccc")}`;  // cccc, eeee, iiii
    let time = `${format(now, "HH:mm:ss",)}.${toLength(now.getMilliseconds(), 3)[0]}`;
    let date = `${format(now, "MMMM do, yyyy")}`;


    return (
        <div className="numeralClock">
            <div className="weekDay">{weekDay}</div>
            <div className="time">{time}</div>
            <div className="date">{date}</div>
        </div>
    );

}
