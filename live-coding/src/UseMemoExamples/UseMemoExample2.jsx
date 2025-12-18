import { useMemo, useState } from "react";


function Factorial (){
    const [num, setNum] = useState(0);
    const [theme, setTheme] = useState('light')

 const calculateFactorial = (n) => {    
    console.log('🔢 Обчислюю факторіал для', n);
    if (n <= 0) return 1;
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    
    return result;
  };
  
  const factorial = useMemo(() => {
    return calculateFactorial(num);
  }, [num]);


    return (<>
    <div style={{ 
      background: theme === 'light' ? '#f0f0f0' : '#222', 
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px' 
    }}>
      <h2>Калькулятор факторіалу</h2>
      
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(Number(e.target.value))}
        min="0"
        max="20"
      />
      
      <p>Факторіал {num}! = {factorial.toLocaleString()}</p>
      
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Змінити тему (обчислення НЕ повторюється)
      </button>
      
      <p style={{ fontSize: '12px', marginTop: '20px' }}>
        💡 Дивись в консоль - обчислення відбувається тільки при зміні числа
      </p>
    </div>
    </>)
}

export default Factorial;