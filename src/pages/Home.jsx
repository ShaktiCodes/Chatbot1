import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Chatbot Setup</h1>
      <p>Get started by setting up your chatbot.</p>
      <Link to="/chatbot-setup">
        <button>Start Setup</button>
      </Link>
    </div>
  );
};

export default Home;
