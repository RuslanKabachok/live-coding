import { useState, useMemo } from 'react';

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  
  // ❌ Без useMemo - обчислюється при кожному рендері
  // const sum = items.reduce((acc, item) => acc + item, 0);
  
  // ✅ З useMemo - обчислюється тільки коли змінюється items
  const sumMemo = useMemo(() => {
    console.log('Обчислення суми...');
    return items.reduce((acc, item) => acc + item, 0);
  }, [items]); // Перераховується тільки коли items змінюється
  
  return (
    <div>
      <p>Сума: {sumMemo}</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default UseMemoExample;