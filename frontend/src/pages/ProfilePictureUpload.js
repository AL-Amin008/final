// ProfileManagementPage.js

import React, { useState } from 'react';

const ProfileManagementPage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [base64Image, setBase64Image] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
      setBase64Image(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBase64InputChange = (event) => {
    setBase64Image(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save profile picture to server or MongoDB
  };

  return (
    <div>
      <h2>Profile Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="imageUpload">Upload Profile Picture:</label>
          <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} />
          {profilePicture && (
            <img src={profilePicture} alt="Profile" style={{ width: '100px', height: '100px' }} />
          )}
        </div>
        <div>
          <label htmlFor="base64Input">Enter Base64 Encoded Image:</label>
          <input type="text" id="base64Input" value={base64Image} onChange={handleBase64InputChange} />
          {base64Image && (
            <img src={base64Image} alt="Profile" style={{ width: '100px', height: '100px' }} />
          )}
        </div>
        <button type="submit">Save Profile Picture</button>
      </form>
    </div>
  );
};

export default ProfileManagementPage;
