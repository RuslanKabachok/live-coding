import { useState, useMemo } from "react";

function UseMemoExample (){
    const [search, setSearch] = useState('')
    const [theme, setTheme] = useState('light');

    const users = [
    { id: 1, name: 'Іван Петренко', age: 25, city: 'Київ' },
    { id: 2, name: 'Марія Коваль', age: 30, city: 'Львів' },
    { id: 3, name: 'Петро Шевченко', age: 22, city: 'Одеса' },
    { id: 4, name: 'Олена Іванова', age: 28, city: 'Київ' },
    { id: 5, name: 'Андрій Мельник', age: 35, city: 'Харків' },
  ];

  const filteredUsers = useMemo(()=>{
    return users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
  }, [search])

return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <input 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Шукати за ім'ям..."
      />
      
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Змінити тему (не впливає на фільтрацію)
      </button>
      
      <p>Знайдено: {filteredUsers.length} користувачів</p>
      
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} років - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoExample;