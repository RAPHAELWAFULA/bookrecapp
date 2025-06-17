import React from "react";
// import "./Explore.css"; // Make sure to import your CSS
import SignIn from "./signin";

const Explore = () => {
  return (
    <div className="explore">
      
        <h1>WELCOME TO BOOKRAC</h1>
        <div className="authentication">
          <button className="signin">
            <a href="./signin">SIGN IN</a>
          </button>
          <button className="signup">
            <a href="./signup">SIGN UP</a>
          </button>
        </div>
      
    </div>
  );
};

export default Explore;
