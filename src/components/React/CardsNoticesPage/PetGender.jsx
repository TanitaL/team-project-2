import React from 'react';

const PetGender = ({ gender }) => {
  return (
    <div>
      <p>Gender: {gender === 'male' ? 'Male' : 'Female'}</p>
    </div>
  );
};

export default PetGender;
