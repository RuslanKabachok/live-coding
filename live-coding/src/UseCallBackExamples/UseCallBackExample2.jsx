import {useCallback, useEffect, useState} from 'react';

function DataFetch (){
    const [data, setData] = useState(null);
    const [userId, setUserId] = useState(1);

      // 🔴 БЕЗ useCallback (помилка!)
  const fetchUserDataBad = async () => {
    console.log('Fetching user data BAD...');
    // Уявімо, що тут axios.get(...)
    const response = { id: userId, name: `User ${userId}`, from: 'Bad Function' }; 
    setData(response);
  };

  // ✅ З useCallback (правильно)
  const fetchUserDataGood = useCallback(async () => {
    console.log('Fetching user data GOOD...');
    // Уявімо, що тут axios.get(...)
    const response = { id: userId, name: `User ${userId}`, from: 'Good Function' };
    setData(response);
  }, [userId]); // <--- ЗАЛЕЖНІСТЬ: функція змінюється лише при зміні userId

  // useEffect спрацьовує при зміні функції
  useEffect(() => {
    // Якщо передати fetchUserDataBad, то при кожному рендері створюється нова 
    // функція, useEffect бачить її як зміну і викликає fetchUserDataBad знову.
    // Це призводить до нескінченного циклу!
    // fetchUserDataBad(); 

    // Використовуємо fetchUserDataGood
    fetchUserDataGood(); 
  }, [fetchUserDataGood]); // <--- ЗАЛЕЖНІСТЬ: функція стабільна, поки не зміниться userId

    return (
    <div style={{ padding: '20px' }}>
      <h2>Вибірка даних</h2>
      {data ? (
        <p>Дані користувача: {data.name} (from: {data.from})</p>
      ) : (
        <p>Завантаження...</p>
      )}
      <button 
        onClick={() => setUserId(prev => prev + 1)}
        style={{ marginTop: '10px' }}
      >
        Завантажити іншого користувача
      </button>
       <div style={{ 
        background: '#e8f5e9', 
        padding: '15px', 
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <p style={{ margin: 0, fontSize: '14px' }}>
          ✅ <strong>Рішення:</strong> `useEffect` викликає функцію `fetchUserDataGood`. 
          Завдяки `useCallback`, ця функція лишається тією самою (стабільне посилання), 
          доки не зміниться `userId`. Це запобігає нескінченним рендерам.
        </p>
         <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>
          💡 <strong>Помилка:</strong> Якщо використовувати `fetchUserDataBad`, то при кожному рендері `useEffect` запускається знову, що спричиняє нескінченний цикл запитів до API.
        </p>
      </div>
    </div>
  );
}

export default DataFetch;