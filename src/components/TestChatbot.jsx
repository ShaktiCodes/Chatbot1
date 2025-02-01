import React from "react";
import { dummyTestChats } from "../utils/dummyTestChats";

const TestChatbot = () => {
  return (
    <div>
      <h2>Test Chatbot</h2>
      {dummyTestChats.map((chat) => (
        <div key={chat.id}>
          <p><strong>User:</strong> {chat.userMessage}</p>
          <p><strong>Bot:</strong> {chat.botResponse}</p>
        </div>
      ))}
    </div>
  );
};

export default TestChatbot;
