import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


import { useDispatch,useSelector } from 'react-redux';
import { authSelector, userIdSelector } from 'redux/auth/selectors';

import PetModal from 'components/PetModal/PetModal';


import 'react-toastify/dist/ReactToastify.css';
import css from './NoticesCategoriesItem.module.css';

import sprite from 'assets/svg/sprite-cards.svg';
import { addToFavorit, deletePet } from 'redux/pets/operations';

const CategoryItem = ({
  id,
  title,
  file,
  location,
  age,
  sex,
  category,
  favorite = false,
  owner,
}) => {
  const [imageError, setImageError] = useState(false);
 const userId = useSelector(userIdSelector);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [sexIcon, setSexIcon] = useState('icon-male');
  const dispatch = useDispatch();

  const isUserRegistered = useSelector(authSelector);

  useEffect(() => {
    if (sex === 'female') {
      setSexIcon('icon-female');
    } else {
      setSexIcon('icon-male');
    }
  }, [sex]);

  const handleImageError = () => {
    setImageError(true);
  };

  const addToFavorites = () => {
    if (!isUserRegistered) {
      toast.warning('Please register to add to favorites!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    dispatch(addToFavorit(id));

  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (owner === userId) {
      
      dispatch(deletePet(id));
    }
    
  }

  return (
    <li key={id} className={css.item}>
      <div className={css.imageWrapper}>
        <img
          alt={title}
          loading="lazy"
          className={css.image}
          src={imageError ? 'https://http.cat/407' : file}
          onError={handleImageError}
        />
        <p className={css.category}>{category}</p>
        <button className={css.addToFavoritesButton} onClick={addToFavorites}>
          {favorite ? (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-heart-off`}></use>
            </svg>
          ) : (
            <svg width="24" height="24">
              <use href={`${sprite}#icon-heart-on`}></use>
            </svg>
          )}
        </button>
        {/* <button
          className={css.delFavoritesButton}
          type="buton"
          onClick={handleDelete}
        >
          <svg width="24" height="24">
            <use href={`${sprite}#icon-delete`}></use>
          </svg>
        </button> */}
        {owner === userId && (
          <button
            className={css.delFavoritesButton}
            type="buton"
            onClick={handleDelete}
          >
            <svg width="24" height="24">
              <use href={`${sprite}#icon-delete`}></use>
            </svg>
          </button>
        )}
      </div>

      <div className={css.itemBox}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.infoWrapper}>
          <p className={css.location}>
            <svg className={css.iconSvg} width="24" height="24">
              <use href={`${sprite}#icon-location-1`}></use>
            </svg>
            <span className={css.texProperty}>{location}</span>
          </p>
          <p className={css.year}>
            <svg className={css.iconSvg} width="24" height="24">
              <use href={`${sprite}#icon-clock`}></use>
            </svg>
            <span className={css.texProperty}>{age}</span>
          </p>
          <p className={css.sex}>
            <svg className={css.iconSvg} width="24" height="24">
              <use href={`${sprite}#${sexIcon}`}></use>
            </svg>
            <span className={css.texProperty}>{sex}</span>
          </p>
        </div>
        <div className={css.learnContainerButton}>
          <button className={css.learnMoreButton} onClick={handleOpenModal}>
            Learn More
            <svg width="24" height="24">
              <use href={`${sprite}#icon-pawprint-lapka`}></use>
            </svg>
          </button>
        </div>
      </div>
      <ToastContainer />
      {isModalOpen && (
        <PetModal
          id={id}
          onClose={handleCloseModal}
          isFavorite={false}
          addToFavotire={addToFavorites}
        />
      )}
    </li>
  );
};

export default CategoryItem;
