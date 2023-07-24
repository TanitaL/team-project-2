import React from 'react';
import css from './PetNoticesPage.module.css';

const PetInfo = ({ location, gender, age }) => {
  const handleMapClick = () => {
    // переход на карту или открытие
    console.log('Opening map for location:', location);
  };

  return (
    <div className={css.petLocation}>
      <div className={css.mapWrapper}>
        {/* <div className={css.locationIcon}></div> */}
        <p>{location}</p>
      </div>
      <div>
        <p>Gender: {gender === 'male' ? 'Male' : 'Female'}</p>
      </div>
      <div>
        <p>Age: {age} {age === 1 ? 'year' : 'years'}</p>
      </div>
      <button onClick={handleMapClick}>Map</button>
    </div>
  );
};

export default PetInfo;
