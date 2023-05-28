import React from "react";
import Navbar  from '../components/Navbar';
import axios from 'axios';
import Sidebar from '../components/Sidebar';


const Users = ({ handleLogout}) => {
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className='blu'>
       <Sidebar/>
       </div>
       <div className="user-header">
        <h1>Users</h1>
       </div>
       <div className="users">
        <h2>USERS</h2>
       </div>
    </div>
  );
};

export default Users;
