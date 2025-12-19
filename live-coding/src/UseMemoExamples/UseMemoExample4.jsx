import { useMemo, useState, memo } from "react";

const ExpensiveList = memo(({ items, title }) => {
  console.log('🎨 ExpensiveList рендериться для:', title);
  
  return (
    <div style={{ 
      border: '2px solid #2196F3', 
      padding: '15px', 
      margin: '10px 0',
      borderRadius: '8px'
    }}>
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
});

function Parent() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');
  
  const allItems = [
    { id: 1, name: 'JavaScript', category: 'frontend' },
    { id: 2, name: 'React', category: 'frontend' },
    { id: 3, name: 'Node.js', category: 'backend' },
    { id: 4, name: 'Python', category: 'backend' },
    { id: 5, name: 'CSS', category: 'frontend' },
  ];
  
  // ❌ БЕЗ useMemo - новий масив при кожному рендері
  // const frontendItems = allItems.filter(item => item.category === 'frontend');
  // ExpensiveList отримає "новий" масив і зрендериться знову!
  
  // ✅ З useMemo - той самий масив між рендерами
  const frontendItems = useMemo(() => {
    console.log('🔄 Фільтрую frontend items...');
    return allItems.filter(item => item.category === 'frontend');
  }, []); // Порожній масив = обчислюється один раз
  
  // ✅ Залежить від filter - перераховується при зміні
  const filteredItems = useMemo(() => {
    console.log('🔍 Фільтрую за пошуком...');
    return allItems.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Приклад оптимізації ререндерів</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setCount(count + 1)}>
          Клікнуто: {count} разів
        </button>
        <p style={{ fontSize: '12px', color: '#666' }}>
          ⬆️ Ця кнопка викликає ререндер батьківського компонента
        </p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Шукати технології..."
        />
      </div>
      
      <ExpensiveList 
        items={frontendItems} 
        title="Frontend (не ререндериться при кліку кнопки)"
      />
      
      <ExpensiveList 
        items={filteredItems} 
        title="Результати пошуку (ререндериться при зміні фільтру)"
      />
    </div>
  );
}


export default Parent;