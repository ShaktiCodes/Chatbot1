import React from "react";

function ChatbotIntegration({ onSuccess }) {
  return (
    <div className="chatbot-integration">
      <h2>Chatbot Integration & Testing</h2>
      <button onClick={() => alert("Testing Chatbot...")}>Test Chatbot</button>
      <button onClick={onSuccess}>Integrate on Website</button>
    </div>
  );
}

export default ChatbotIntegration;
