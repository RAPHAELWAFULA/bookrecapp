import { Link } from 'react-router-dom';
import './navbar.css';
import { useState} from 'react';
import { FaHome } from 'react-icons/fa';


const Navbar = () =>{
     const [query, setQuery] = useState('');
      const handleChange = (e) => {
    setQuery(e.target.value);
    // Optional: You can handle filtering/searching here
  };
    
    
    return (

    <div className="navbar">
        <div className="logo">
            <h1>BOOKRAC</h1>
        </div>
        <a href="/" style={{display:"none",color:"white"}} className='homeicon'><FaHome /></a>
        <div className="navlinks"
        >
      <Link to="/" >EXPLORE</Link>
      <Link to="/favourite" >FAVOURITES</Link>
      <Link to="/library" >LIBRARY</Link>
      <Link to="/AddBooks">ADD A BOOK</Link>
      <Link to="/MyBooks"> MY LIBRARY</Link>

      </div>
     <h1 className='read'>LET'S READ</h1>
     </div>
     


);
};
export default Navbar;