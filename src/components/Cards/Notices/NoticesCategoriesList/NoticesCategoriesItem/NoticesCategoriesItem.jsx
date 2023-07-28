import React, { useState } from 'react';
import css from './NoticesCategoriesItem.module.css';
import sprite from 'assets/svg/sprite-cards.svg';
import PetModal from 'components/PetModal/PetModal';

const CategoryItem = ({ id, title, text, date, file, location, sex }) => {
  const [imageError, setImageError] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleImageError = () => {
    setImageError(true);
  };

  const addToFavorites = () => {
    if (isFavorite) {
      // Если объявление уже в списке понравившихся, удаляем его
      setFavorites(favorites.filter(favoriteId => favoriteId !== id));
      setIsFavorite(false);
    } else {
      // Если объявление не в списке понравившихся, добавляем его
      setFavorites([...favorites, id]);
      setIsFavorite(true);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li key={id} className={css.item}>
        <div className={css.imageWrapper}>
          <img
            alt={title}
            loading="lazy"
            className={css.image}
            src={imageError ? 'https://http.cat/407' : file}
            onError={handleImageError}
          />
          {/* <p className={css.type}>{text}</p> */}
          <button className={css.addToFavoritesButton} onClick={addToFavorites}>
            {isFavorite ? (
              <svg width="24" height="24">
                <use href={`${sprite}#icon-heart-off`}></use>
              </svg>
            ) : (
              <svg width="24" height="24">
                <use href={`${sprite}#icon-heart-on`}></use>
              </svg>
            )}
          </button>
        </div>

        <div className={css.itemBox}>
          <h2 className={css.title}>{title}</h2>
          <div className={css.infoWrapper}>
            <p className={css.location}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-location-1`}></use>
              </svg>
              {location}
            </p>
            <p className={css.year}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-clock`}></use>
              </svg>
              {date}
            </p>
            <p className={css.sex}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-male`}></use>
              </svg>
              {sex}
            </p>
          </div>
          <div>
            <button className={css.learnMoreButton} onClick={handleOpenModal}>
              Learn More
              <svg width="24" height="24">
                <use href={`${sprite}#icon-pawprint-lapka`}></use>
              </svg>
            </button>
          </div>
        </div>
      </li>

      {isModalOpen && (
        <PetModal
          noticeId={id}
          onClose={handleCloseModal}
          isFavorite={isFavorite}
          addToFavotire={addToFavorites}
        />
      )}
    </>
  );
};

export default CategoryItem;
