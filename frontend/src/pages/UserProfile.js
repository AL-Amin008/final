// UserProfile.js

import React from 'react';

const UserProfile = ({ userProfile }) => {
  const { avatar } = userProfile;

  // Check if the user has a custom avatar
  const hasCustomAvatar = avatar !== null && avatar !== '';

  return (
    <div>
      <h2>User Profile</h2>
      {hasCustomAvatar ? (
        <img src={avatar} alt="User Avatar" />
      ) : (
        <img src="/default-avatar.jpg" alt="Default Avatar" />
      )}
      {/* Other user profile information */}
    </div>
  );
};

export default UserProfile;
