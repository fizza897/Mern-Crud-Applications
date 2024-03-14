import React, { useEffect, useState } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"
import axios from "axios";
import "./UpdateUser.css";
const UpdateUser = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  const { id } = useParams();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/getOne/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const submitForm= async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`,user)
    .then((response)=>{
      toast.success(response.data.msg, {position:"top-right"})
      navigate("/")
    })
    .catch(error => console.log(error))
  }
  return (
    <>
      <div className='UpdateUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form className='UpdateUserForm' onSubmit={submitForm}>
          <div className='inputGroup'>
            <label htmlFor="fname">First Name</label>
            <input type="text" id='fname' value={user.fname} onChange={inputChangeHandler} name='fname' autoComplete='off' placeholder='First Name' />
          </div>
          <div className='inputGroup'>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id='lname' name='lname' value={user.lname} onChange={inputChangeHandler} autoComplete='off' placeholder='Last Name' />
          </div>
          <div className='inputGroup'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' value={user.email} onChange={inputChangeHandler} autoComplete='off' placeholder='Email Address' />
          </div>
          <div className='inputGroup'>
            <button type='submit'>Update User</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
