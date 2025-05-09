import Navbar from "./components/navbar";
import page1 from "./pages/explore";
import page2 from "./pages/recomandations";
import page3 from "./pages/library";
import pages4 from "./pages/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";

const Card = ({ title, description, image }) => {
  return (
    <div >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

function App () {

  const [ query, setQuery ] =useState ('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const cardsData = [
   
    {
      title: "Adventure",
      description: "Explore thrilling and mysterious adventures.",
      image : "adventure.jpg", 
    },
    {
      title: "Science",
      description: "Learn about discoveries and inventions." ,
      image: "science.jpg",
    },
    {
      title: "Romance",
      description: "Enjoy heartfelt love stories.",
      image : "romance.jpg",
    },
  ];
  return (
    <Router>
    <Navbar />
<div className="explore"
style={{
  backgroundImage:"URL(picf.jpg)",
   backgroundSize: "cover",      
  backgroundPosition: "center",
  height:"200px",
  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
  margin:"20px"

}}>
  
</div>

<div className="intro">
  <div className="welcome">
    <h1 style={{fontFamily:"nova",color:"greenyellow",fontSize:"50px",fontWeight:"600"}}>
      WELCOME READERS
    </h1>
    <p> We welcome you into the reading community.</p>
       
       <p>Our aim is to keep you informed & entertained  with our materials.</p>
     <p> Choose the type of book u want to start with below.</p>

  </div>
  <div className="cards">
    
 {cardsData.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}

       
            />
          ))}
          
  </div>
</div>
</Router>
  );
}
export default App;