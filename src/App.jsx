import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';

import './App.css'


export default function App() {

    const themes = [
        "main",
        "dark",
        "light",
    ]

    let [now, setNow] = useState(new Date());
    let [theme, setTheme] = useState(themes[0]);

    useEffect(() => {setInterval(() => {setNow(new Date())}, 10)}, []);
    useEffect(() => {document.documentElement.setAttribute("data-theme", theme)}, [theme])


    // let [startDate] = useState(new Date());
    // useEffect(() => {
    //     setInterval(() => {
    //         let currentDate = new Date();
    //         let startFrom = new Date(2023, 10, 4, 15, 30, 0);
    //         let speed = 1;
    //         setNow(new Date((currentDate.valueOf() - startDate.valueOf()) * speed + startFrom.valueOf()));
    //     }, 10)
    // }, []);


    let nextTheme = () => {
        let currentThemeIndex = themes.indexOf(theme);
        let nextThemeIndex = currentThemeIndex < themes.length - 1 ?
                             currentThemeIndex + 1 : 0;
                             
        setTheme(themes[nextThemeIndex]);
    }


    return (<>
        {/* <Header /> */}
        <Main now={now} nextTheme={nextTheme} />
    </>);

}
