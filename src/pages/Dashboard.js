import React from 'react';
import Navbar  from '../components/Navbar';
import Status from '../components/Status';

import Sidebar from '../components/Sidebar';

const Dashboard = ({ handleLogout}) => {
 

  return (
    <div>
        <Navbar  handleLogout={handleLogout}/>
       <div className='blu'>

       <Sidebar/>
        
       </div>
       <Status/>
          </div>
  )
}

export default Dashboard
