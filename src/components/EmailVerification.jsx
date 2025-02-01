import React, { useState } from "react";

function EmailVerification({ onVerify }) {
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verificationCode === "123456") {
      onVerify();
    } else {
      alert("Invalid Code. Please try again.");
    }
  };

  return (
    <div className="email-verification">
      <h2>Email Verification</h2>
      <p>Enter the verification code sent to your email:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default EmailVerification;
