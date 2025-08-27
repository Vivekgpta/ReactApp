import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function User() {
    const [user,setUser]=useState([]);
     
    const getData =()=>{
        return fetch(`https://reqres.in/api/users`,{headers:{
            "x-api-key": "reqres-free-v1"
        },
    }).then((res)=>res.json());
    };
    const fetchandGetUser=async ()=>{
        try {
            const data =await getData();
            setUser(data.data);   
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchandGetUser();
    },[])
  return (
     <div className="page-container">
    {user.map((el) => (
      <div key={el.id} className="user-card">
        <img src={el.avatar} alt="" width="250px" />
        <h1>Id:{el.id}</h1>
        <h2>Name:{el.first_name} {el.last_name}</h2>
        <h3>Email Id: {el.email}</h3>
        <Link to={`/user/${el.id}`}>More Info</Link>
      </div>
    ))}
  </div>
  )
}

export default User                 