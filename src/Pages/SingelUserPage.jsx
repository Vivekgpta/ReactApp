
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function SingelUserPage() {
  const [user, setUser] = useState({});
  const val = useParams();
  const getData = () => {
    return fetch(`https://reqres.in/api/users/${val.user_id}`, {
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((res) => res.json());
  };
  const fetchandGetUser = async () => {
    try {
      const data = await getData();
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchandGetUser();
  }, []);
  return (
     <div className="user-card">
    <img src={user.avatar} alt="" width="250px" />
    <h1>Id:{user.id}</h1>
    <h2>
      Name:{user.first_name} {user.last_name}
    </h2>
    <h3>Email Id: {user.email}</h3>
    <p>
      About Me: Lorem ipsum, dolor sit amet consectetur adipisicing userit.
      Dolores, quos.
    </p>
    <hr />
    <p>
      {/* Lorem ipsum long description ... */}
    </p>
  </div>
  );
}

export default SingelUserPage;
