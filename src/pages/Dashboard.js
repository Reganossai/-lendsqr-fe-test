import React from 'react';
import Navbar  from '../components/Navbar';

import Sidebar from '../components/Sidebar';

const Dashboard = ({ handleLogout}) => {
 

  return (
    <div>
        <Navbar  handleLogout={handleLogout}/>
       <div className='blu'>

       <Sidebar/>
        
       </div>
       
          </div>
  )
}

export default Dashboard
