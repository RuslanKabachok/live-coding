import { useState, useEffect, useMemo } from 'react'

function UserList (){
    const [users, setUsers] = useState([]);  
    const [loading, setLoading] = useState(true);   
    const [errorMsg, setErrorMsg] = useState(null);  
    const [search, setSearch] = useState('');

    useEffect(() => {
    const getUsersData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const resultData = await response.json();
            setUsers(resultData);
            setLoading(false);
        } catch (error) {
            setErrorMsg(error);
            console.log(errorMsg);
            setLoading(false);
        }
    } 
    getUsersData();
}, []);

const filteredUsers = useMemo(()=>{
    return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
}, [users, search])
    
    return (
    <>
        <h1>User list:</h1>
        <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
        {loading && <p>Loading...</p>}
        {errorMsg && <p>Error: {errorMsg.message}</p>}


        {!loading && !errorMsg && (
        <ul>
            {filteredUsers.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>)
        }  
    
    </>)
}

export default UserList;