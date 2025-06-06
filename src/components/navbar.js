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
            <img
             src="logoa-removebg-preview.png" 
            alt="My local display"
            style={{
                height:"150px",
                width:"200px"
            }} 
            /> 
        </div>
        <a href="/" style={{display:"none",color:"white"}} className='homeicon'><FaHome /></a>
        <div className="navlinks"
        >
      <Link to="/" >EXPLORE</Link>
      <Link to="/recomandation" >RECOMANDATIONS</Link>
      <Link to="/library" >LIBRARY</Link>
      <Link to="/contact">CONTACT US</Link>
      </div>
     <div className="search">
         <input
        type="text"
        placeholder="Search all books..."
        value={query}
        onChange={handleChange}/>
     </div>
     </div>
     


);
};
export default Navbar;