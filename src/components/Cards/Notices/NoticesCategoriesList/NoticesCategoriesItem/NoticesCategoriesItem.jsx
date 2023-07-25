import React, { useState } from 'react';
import css from './NoticesCategoriesItem.module.css';
import PetLocation from '../../../../React/CardsNoticesPage/PetLocation';
import PetAge from '../../../../React/CardsNoticesPage/PetAge';
import PetGender from '../../../../React/CardsNoticesPage/PetGender';
// import YourSVG from '../../../../../assets/svg/pawprint-lapka.svg';

const CategoryItem = ({ id, title, text, date, imgUrl, url, location, age, gender }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <li key={id} className={css.item}>
      <img
        alt={title}
        loading="lazy"
        className={css.image}
        src={imageError ? 'https://http.cat/407' : imgUrl}
        onError={handleImageError}
      />

      <div className={css.itemBox}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.itemWrapper}>
          <PetLocation location={location} />
          <PetAge age={age} />
          <PetGender gender={gender} />
          <button
            onClick={() => window.open(url, '_blank', 'noopener noreferrer')}
            className={css.button}
          >
            Learn more
            {/* <span className={css.svgContainer}>
              <YourSVG />
            </span> */}
          </button>
        </div>
      </div>
    </li>
  );
};

export default CategoryItem;
