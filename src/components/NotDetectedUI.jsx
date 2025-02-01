import React from "react";

function NotDetectedUI({ onRetry }) {
  return (
    <div className="not-detected-ui">
      <h2>⚠️ Chatbot Integration Not Detected! ⚠️</h2>
      <p>Please ensure the code is placed correctly on your website.</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}

export default NotDetectedUI;
