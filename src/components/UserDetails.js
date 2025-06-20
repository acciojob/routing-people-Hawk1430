import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false);
                console.log(user)
            })
            .catch(err => {
                console.error('Error: ',err);
                setLoading(false);
            })
    },[id])

    if(loading) return <div>Loading...</div>
    if(!user) return <p>User not found.</p>
  return (
    <>
        <h1>User Details</h1>
        <p>{`Name: ${user.name}`}</p>
        <p>{`Username: ${user.username}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Phone: ${user.phone}`}</p>
        <p>{`Website: ${user.website}`}</p>
    </>
  )
}

export default UserDetails