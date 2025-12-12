import { useState, useEffect, useLayoutEffect } from 'react';

function UseLayoutEffectExample() {
  const [width, setWidth] = useState(0);
  
  // ❌ useEffect - асинхронний, може бути мерехтіння
//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);
  
  // ✅ useLayoutEffect - синхронний, немає мерехтіння
  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  
  return <p>Ширина: {width}px</p>;
}

export default UseLayoutEffectExample;