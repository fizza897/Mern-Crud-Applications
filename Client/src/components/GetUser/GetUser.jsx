import React, { useEffect, useState } from 'react'
import "./GetUser.css"
import { Link } from 'react-router-dom';
import toast from "react-hot-toast"
import axios from "axios"

 const  GetUser=() => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    const fetchData =async()=>{
      const response = await axios.get("http://localhost:8000/api/getAll") 
      setUsers(response.data)
    }
    fetchData();
  },[])
  const deleteUser =async(userId)=>{
    await axios.delete(`http://localhost:8000/api/delete/${userId}`)
    .then((response)=>{
      console.log(response)
      setUsers((prevUser)=>prevUser.filter((user)=>user._id !==userId))
      toast.success(response.data.msg,{position:"top-right"})
    })
    .catch((error)=>{
      console.log(error)
    })

  }
  return (
    <>
    <div className='userTable'>
      <Link to={"/add"} className='getAllUser'>Add User</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO.</th>
            <th>User Name</th>
            <th>user Email</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user,index)=>{
            return(
          <tr key={user._id}>
            <td>{index + 1}</td>
            <td>{user.fname} {user.lname}</td>
            <td>{user.email}</td>
            <td className='actionButton'>
              <button onClick={()=>deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
              <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
            </td>
          </tr>

            )
          })}
        </tbody>
      </table>
    </div>
    </>
  )
}
export default GetUser;