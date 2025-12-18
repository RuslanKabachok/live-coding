import { useRef, useState } from 'react';

function InputChangeCounter() {
  const changeCount = useRef(0);
//   const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  const handleChange = (e) => {
    changeCount.current = changeCount.current + 1;
    // setCount(count + 1);
    setName(e.target.value);
  };
  
  return (
    <>
      <input 
        value={name} 
        onChange={handleChange}
        placeholder="Введи своє ім'я"
      />
      <p>Ім'я: {name}</p>
      <p>Ти змінив input {changeCount.current} раз(ів)</p>
      {/* <p>Ти змінив input {count} раз(ів)</p> */}
    </>
  );
}

export default InputChangeCounter;