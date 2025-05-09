import Navbar from "./components/navbar";
import page1 from "./pages/explore";
import page2 from "./pages/recomandations";
import page3 from "./pages/library";
import pages4 from "./pages/contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
      title: <Link to = "#">ADVENTURE</Link>,
      description: "Explore thrilling and mysterious adventures.",
      image : "adventure.jpg", 
    },
    {
      title: <Link to = "#">SCIENCE</Link>,
      description: "Learn about discoveries and inventions." ,
      image: "science.jpg",
    },
    {
      title: <Link to = "#">ROMANCE</Link>,
      description: "Enjoy heartfelt love stories.",
      image : "romance.jpg",
    },


     {
      title: <Link to = "#">NATURE</Link>,
      description: "Mysteries and wonders wispered by nature.",
      image : "nature.png", 
    },
    {
      title: <Link to = "#">HISTORY</Link>,
      description: "Interested with events of the past and origin of things?." ,
      image: "history.jpg",
    },
    {
      title: <Link to = "#">SPIRITUAL</Link>,
      description: "Nourish your spirit.",
      image : "spiritual.jpg",
    },


     {
      title: <Link to = "Romance">HORROR</Link>,
      description: "Scary stories interst many people find them here.",
      image : "horrors.jpg", 
    },
    {
      title: <Link to = "Romance">DOCUMENTARY</Link>,
      description: "Facts is a great way of storing knowledge." ,
      image: "documentary.jpg",
    },
    {
      title: <Link to = "Romance">POLITICAL</Link>,
      description: "Eager to learn political terms, tactics and structures, we know the best books for that. .",
      image : "political.jpg",
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