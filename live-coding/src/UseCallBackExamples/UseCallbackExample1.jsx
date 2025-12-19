import {useCallback, useState, memo} from 'react';

const Button = memo(({onClick, children})=>{
    console.log('Рендер', children);

    return (
    <button 
      onClick={onClick}
      style={{ 
        padding: '10px 20px', 
        margin: '5px',
        background: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
})

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  const increment = useCallback(() => {
    console.log('➕ Increment викликано');
    setCount(prevCount => prevCount + 1);
  }, []);
  
  const decrement = useCallback(() => {
    console.log('➖ Decrement викликано');
    setCount(prevCount => prevCount - 1);
  }, []);
  
  console.log('🔵 Батьківський компонент рендериться');
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Лічильник: {count}</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <Button onClick={increment}>Збільшити</Button>
        <Button onClick={decrement}>Зменшити</Button>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введи своє ім'я (спостерігай за консоллю)"
          style={{ 
            padding: '10px',
            width: '300px',
            border: '2px solid #ddd',
            borderRadius: '5px'
          }}
        />
        <p>Привіт, {name || 'незнайомець'}!</p>
      </div>
      
      <div style={{ 
        background: '#e8f5e9', 
        padding: '15px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <p style={{ margin: 0, fontSize: '14px' }}>
          ✅ <strong>Рішення:</strong> Коли ти вводиш ім'я, батьківський компонент рендериться → 
          але функції `increment` і `decrement` ті САМІ (завдяки useCallback) → 
          кнопки отримують ті самі функції → кнопки НЕ ререндеряться! 🎉
        </p>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
          💡 Дивись в консоль: при введенні імені кнопки НЕ рендеряться!
        </p>
      </div>
    </div>
  );
}

export default Counter;