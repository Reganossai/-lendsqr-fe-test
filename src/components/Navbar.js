import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
const [nav,setNav]=useState(false);
const handleNav = () =>{
setNav(!nav);
  }

nav?document.body.style.overflow="hidden":document.body.style.overflow="auto"
  
return(
<nav className="navbar">
<Link to="/"><img src="http://sekior.next-itservices.com/wp-content/uploads/2022/06/lgo.png" alt="Sekior Logo" className="sekior-logo" /></Link>
<div id="navbarSupportedContent">
<button ><b>Login</b></button>
  </div>
  {nav?
<div id="navbarSupportedContentMobile">
             <h1>Homepage</h1>
             <h1>homie</h1>
             <h1>Sample Page</h1>
             <button ><b>Login</b></button>
             </div>:null}

<div onClick={handleNav} className="zaracho">
{nav ? <FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faBars}/>}
      </div>

</nav>
);

  }
  export default Navbar;
