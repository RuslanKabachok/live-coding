import {useContext, createContext, useState} from 'react'

const AuthContext = createContext();

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);

    const login = (name) => setUser({name, role: 'Admin'});
    const logout = () => setUser(null);

    return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function UserProfile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <p>Будь ласка, увійдіть в систему.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <p>Вітаємо, <strong>{user.name}</strong>! (Роль: {user.role})</p>
      <button onClick={logout}>Вийти</button>
    </div>
  );
}

function LoginButton() {
  const { user, login } = useContext(AuthContext);

  if (user) return null; 

  return (
    <button onClick={() => login('Олександр')}>Увійти як Олександр</button>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee' }}>
        <span>Мій Додаток</span>
        <LoginButton />
      </nav>
      <main style={{ padding: '20px' }}>
        <h2>Контент сторінки</h2>
        <UserProfile />
      </main>
    </AuthProvider>
  );
}