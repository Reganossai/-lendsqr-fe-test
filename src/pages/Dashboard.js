import React,{useEffect,useCallback,useState} from 'react';
import Navbar  from '../components/Navbar';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const dashboard = ({ handleLogout}) => {
  // const [person, setPerson] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");

  
  // const callBck = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     setErrorMessage("");
  //     const res = await axios.get(
  //       "https://opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800"
  //     );
  //     setPerson(res.data);
  //     console.log(res.data);
  //   } catch (err) {
  //     setErrorMessage(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   callBck();
  // }, [callBck]);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (errorMessage) {
  //   return <h1>{errorMessage}</h1>;
  // }

  return (
    <div>
        <Navbar  handleLogout={handleLogout}/>
        <Sidebar/>
        
          </div>
  )
}

export default dashboard
