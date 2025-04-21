//CPAN 144 - FINAL EXAM - Daniel Aguilar
//Components > UserProfile.jsx

'use client';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

/* User profile component displaying name, image, and bio. Uses UI Avatars API for profile pictures */

const UserProfile = ({ name, bio }) => {
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    //Use props if provided, otherwise default to John Doe
    const displayName = name || 'John Doe';
    const displayBio = bio || 'Software developer with 5 years of experience in React and Node.js';
    
    const initials = displayName.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
    
    //Color-changing feature of my design, 5 different colour options 
    const bgColors = ['FF5733', '33FF57', '3357FF', 'F033FF', '33FFF0'];
    const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];
    
    setProfilePicture(
      `https://ui-avatars.com/api/?name=${initials}&background=${randomBg}&color=fff&size=100`
    );
  }, [name, bio]);

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      {profilePicture && (
        <img 
          src={profilePicture} 
          alt={`${name || 'John Doe'}'s profile`}
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      )}
      <div>
        <h3 style={{ margin: '0 0 10px' }}>{name || 'John Doe'}</h3>
        <p style={{ margin: 0 }}>{bio || 'Software developer with 5 years of experience in React and Node.js'}</p>
      </div>
    </div>
  );
};

//Prop type validation
UserProfile.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string
};

//Default props (John Doe)
UserProfile.defaultProps = {
  name: 'John Doe',
  bio: 'Software developer with 5 years of experience in React and Node.js'
};

export default UserProfile;