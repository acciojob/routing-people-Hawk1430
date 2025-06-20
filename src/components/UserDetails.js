import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setUser(data);
          setLoading(false);
        }, 1000);
      });
  }, [id]);

    if(loading) return <div>Loading...</div>

  return (
    <>
        <h1>User Details</h1>
        <p>{`Name: ${user.name}`}</p>
        <p>{`Username: ${user.username}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Phone: ${user.phone}`}</p>
        <p>{`Website: ${user.website}`}</p>
        <Link to="/">Back to User List</Link>
    </>
  )
}

export default UserDetails