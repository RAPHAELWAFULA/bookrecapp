import React from "react";
// import "./Explore.css"; // Make sure to import your CSS
import SignIn from "./signin";

const Explore = () => {
  return (
    <div className="explore1">
      <div className="explore">
        <h1>WELCOME TO BOOKRAC</h1>
      
          <div className="about">
          <p>
          Whether you're a passionate reader, a curious explorer, or just looking for your next great read, BookRac is here to guide you. Our smart recommendation engine helps you discover books tailored to your taste, 
          while features like user reviews, favorites, and activity tracking make your reading journey engaging and rewarding.

From timeless classics to hidden gems, we bring the library to your fingertips. Dive in, explore, and let the stories find you.
while features like user reviews, favorites, and activity tracking make your reading journey engaging and rewarding.

From timeless classics to hidden gems, we bring the library to your fingertips. Dive in, explore, and let the stories find you.

          </p>
          </div>
          <div className="authentication">
          <button className="signin">
            <a href="./signin">SIGN IN</a>
          </button>
          <button className="signup">
            <a href="./signup">SIGN UP</a>
          </button>
          </div>
         
        </div>
        <div className="nice">
            <img src="/slider-02-2-removebg-preview.png" alt=""/>
          </div>
    </div>
  );
};

export default Explore;
