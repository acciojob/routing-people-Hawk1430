import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const UserList = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setList(data);
                console.log(data)
            })
            .catch(err => {
                console.error('Error: ',err);
            })
    }, []);
    
  return (
    <>
        <h1>User Lists</h1>

        <ul>
            {list.map((item)=> (
                <li key={item.id} ><Link to={`/users/${item.id}`} >{item.name}</Link></li>
            ))}
        </ul>
    </>
  )
}

export default UserList