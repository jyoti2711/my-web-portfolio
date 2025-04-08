import React from "react";
import "./Home.css";
import jyoti from"../assets/jyoti.jpg";


const Home = () => {
  return (
    <div className="home-container">
  <div className="home-text">
    <h1>Welcome to My Portfolio</h1>
    <p>This is the Home Page</p>
  </div>
  <div className="home-image">
    <img src={jyoti} alt="Jyoti" />
  </div>
</div>
  );
};

export default Home;
