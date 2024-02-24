import React, { useState } from 'react';

const AccountCreationForm = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSubmit = () => {
    // Generate and send OTP to the entered email address
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate OTP, mobile number, and password
    // Proceed with account creation if all validations pass
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="button" onClick={handleEmailSubmit}>Send OTP</button>
      </div>
      <div>
        <label htmlFor="otp">OTP:</label>
        <input type="text" id="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="mobile">Mobile:</label>
        <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default AccountCreationForm;
