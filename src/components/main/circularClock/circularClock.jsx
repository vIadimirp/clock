import "./circularClock.css";


export default function CircularClock({now}) {

    let secondsHandAngle = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
    let minutesHandAngle = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
    let hoursHandAngle = (now.getHours() + now.getMinutes() / 60) / 12 * 360;


    return (
        <div className="circularClock">
            <div className="hoursHand" style={{transform: `rotate(${hoursHandAngle}deg)`}}>
                <div></div>
            </div>
            <div className="minutesHand" style={{transform: `rotate(${minutesHandAngle}deg)`}}>
                <div></div>
            </div>
            <div className="secondsHand" style={{transform: `rotate(${secondsHandAngle}deg)`}}>
                <div></div>
            </div>
            <div className="face">
                {["•", "•", 3, "•", "•", 6, "•", "•", 9, "•", "•", 12].map(
                    (symbol, index, arr) => {
                        const angle = (index + 1) * 360 / arr.length;
                        return (
                            <div key={index} style={{transform: `rotate(${angle}deg)`}}>
                                <span style={{transform: `rotate(-${angle}deg)`, animationDelay: `${index / 20}s`}}>{symbol}</span>
                            </div>
                        );
                    }
                )}
            </div>
            <div className="center"></div>
        </div>
    );

}
