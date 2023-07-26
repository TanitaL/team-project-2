import React from 'react';
import css from './PetNoticesPage.module.css';

const PetLocation = ({ location }) => {
  const handleMapClick = () => {
    // переход на карту или открытие
    console.log('Opening map for location:', location);
  };

  return (
    <div className={css.petLocation}>
      <div className={css.mapWrapper}>
        <div className={css.locationIcon}></div>
        <p>{location}</p>
      </div>
      <button onClick={handleMapClick}>Map</button>
    </div>
  );
};

export default PetLocation;
