import { useRef, useState, useEffect } from "react";

function PrevValue () {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(null);

    useEffect(()=>{
        prevCountRef.current = count;
    }, [count]);

    return (<>
        <h3>Поточне значення: {count}</h3>
        <h3>Попереднє значення: {prevCountRef.current}</h3>
        <button onClick={() => setCount(count + 1)}>Збільшити</button>
        <button onClick={() => setCount(count - 1)}>Зменшити</button>
      </>)
}

export default PrevValue;