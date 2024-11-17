import React from 'react';
import UserInfo from './UserInfo'; // UserInfo will get the user data from the context

function ProfilePage() {
  return <UserInfo />; // No need to pass userData here anymore
}

export default ProfilePage;
