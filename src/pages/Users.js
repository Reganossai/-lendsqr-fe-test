import React,{useEffect,useCallback,useState}  from "react";
import Navbar  from '../components/Navbar';
import axios from 'axios';
import Sidebar from '../components/Sidebar';


const Users = ({ handleLogout}) => {
    const [person, setPerson] = useState([]);
    const [total, setTotal] = useState("");
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    
  
    
    const callBck = useCallback(async () => {
      try {
        setLoading(true);
        setErrorMessage("");
        const res = await axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        setPerson(res.data);
        setTotal(res.data.length);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    }, []);
  
    useEffect(() => {
      callBck();
    }, [callBck]);
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (errorMessage) {
      return <h1>{errorMessage}</h1>;
    }
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
       <p>{total}</p> 
       </div>

       <div className="active-users">
        <h2> ACTIVE USERS</h2>
       <p>{total}</p> 
       </div>

       <div className="users-with-loans">
        <h2>USERS WITH LOANS</h2>
       <p>{total}</p> 
       </div>

       <div className="users-with-savings">
        <h2>USERS WITH SAVINGS</h2>
       <p>{total}</p> 
       </div>
    </div>
  );
};

export default Users;
