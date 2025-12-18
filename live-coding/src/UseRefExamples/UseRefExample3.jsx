import { useRef, useState } from 'react'

function Timer (){
    const [seconds, setSeconds]= useState(0);
    const timeRef = useRef(null);

    const startTimer = () => {
        if (timeRef.current) return;

        timeRef.current = setInterval(()=>{
            setSeconds(prev=>prev+1);
        }, 1000)
    }

    const stopTimer =()=>{
        clearInterval(timeRef.current);
        timeRef.current = null;
    }

    const resetTimer =()=>{
        stopTimer();
        timeRef.current = null;
        setSeconds(0);
    }

    return (<>  <h2>Секунд: {seconds}</h2>
        <button onClick={startTimer}>Старт</button>
        <button onClick={stopTimer}>Стоп</button>
        <button onClick={resetTimer}>Скинути</button></>)
}

export default Timer;