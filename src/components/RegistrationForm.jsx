import React, { useState, useEffect } from "react";

function RegistrationForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Load Google Sign-In script dynamically
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleGoogleLogin,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-btn"),
        { theme: "outline", size: "large" }
      );
    };
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGoogleLogin = (response) => {
    const userObject = JSON.parse(atob(response.credential.split(".")[1]));
    alert(`Welcome, ${userObject.name}! Email: ${userObject.email}`);
    onRegister();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <div className="registration-form">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <div id="google-signin-btn"></div>
    </div>
  );
}

export default RegistrationForm;
