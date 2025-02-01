import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatbotSetup from "./pages/ChatbotSetup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot-setup" element={<ChatbotSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
