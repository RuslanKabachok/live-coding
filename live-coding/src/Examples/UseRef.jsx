import { useRef } from 'react';

function UseRefExample() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus(); 
  };
  
  return (
    <>
      <input ref={inputRef} type="text" placeholder='Використовувати коли треба отримати доступ до DOM елемента або зберегти значення, яке не викликає ререндер.' />
      <button onClick={focusInput}>Фокус на input</button>
    </>
  );
}

export default UseRefExample;