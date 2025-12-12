import { useState, useCallback } from 'react';

//Використовувати коли передаєш функцію як пропс дочірньому компоненту, щоб уникнути його зайвих ререндерів.

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  

  // const increment = () => setCount(count + 1);

  const incrementMemo = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); 
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementMemo}>+1</button>
    </div>
  );
}

export default UseCallbackExample;