import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='fazya' style={{display:'flex'}} >
        <div style={{height:'40px'}} >
            id:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.id}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
            name:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.name}</p></div>)}
        </div> 
        <div style={{height:'40px'}} >
        username:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.username}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        email:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.email}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        street:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.address.street}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        suite:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.address.suite}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        city:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.address.city}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        zipcode:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.address.zipcode}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        lat:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.address.geo.lat}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        lng:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.address.geo.lng}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        phone:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.phone}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
        website:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.website}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
            company name:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.company.name}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
            company catchPhrase:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.company.catchPhrase}</p></div>)}
        </div>
        <div style={{height:'40px'}} >
            company bs:{listOfUsers.map(user=><div style={{height:'50px',width:'maxContent'}}><p>{user.company.bs}</p></div>)}
        </div>

    </div>
  )
}
