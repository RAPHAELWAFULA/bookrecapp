import { Link } from "react-router-dom";
import './navbar.css';
import { useState} from 'react';



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
             src="my_logo-removebg-preview.png" 
            alt="My local image"
            style={{
                height:"100px",
                width:"100px"
            }} 
            /> 
        </div>
        <div className="navlinks"
        >
      <Link to="/" >EXPLORE</Link>
      <Link to="/page2" >RECOMANDATIONS</Link>
      <Link to="/page3" >LIBRARY</Link>
      <Link to="/page4">CONTACT US</Link>
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