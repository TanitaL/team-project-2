import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Notiflix from 'notiflix';
import { instance } from 'service/api/api';
import transformCategory from 'service/addPetHelpers/transformCategory';
import sprite from 'assets/svg/sprite-cards.svg';
import css from './PetModal.module.css';

const PetModal = ({ id, onClose, isFavorite, addToFavotire }) => {
  const [details, setDetails] = useState(null);

  const handleOnBackdropClose = e => {
    const clickOnBackDrop = e.target.className.includes('backdrop');
    if (clickOnBackDrop) {
      onClose();
    }
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await instance.get(`/notices/${id}`);
        setDetails(data);
      } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
      }
    };

    const handleOnPressEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleOnPressEscape);
    getDetails();

    return () => {
      document.removeEventListener('keydown', handleOnPressEscape);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!details) {
    return (
      <>
        <div className={css.backdrop} onClick={onClose}>
          <p>Loading ...</p>
        </div>
      </>
    );
  } else {
    const {
      category,
      file,
      title = '',
      name,
      date = '',
      type,
      location = '',
      sex = '',
      price = null,
      owner,
      comments = '',
    } = details.notice;

    return createPortal(
      <>
        <div className={css.backdrop} onClick={handleOnBackdropClose}>
          <div className={css.box}>
            <div className={css.upperBox}>
              <div className={css.thumb}>
                <img
                  src={file}
                  className={css.image}
                  alt="Information about pet"
                />
                <p className={css.category}>{transformCategory(category)}</p>
              </div>
              <div className={css.afterImage}>
                {title && <h2 className={css.title}>{title}</h2>}
                <ul className={css.list}>
                  <li>
                    <p className={css.field}>
                      Name: <span className={css.value}>{name}</span>
                    </p>
                  </li>

                  {date && (
                    <li>
                      <p className={css.field}>
                        Birthday: <span className={css.value}>{date}</span>
                      </p>
                    </li>
                  )}

                  <li>
                    <p className={css.field}>
                      Type: <span className={css.value}>{type}</span>
                    </p>
                  </li>

                  {location && (
                    <li>
                      <p className={css.field}>
                        Place:<span className={css.value}>{location}</span>
                      </p>
                    </li>
                  )}

                  {sex && (
                    <li>
                      <p className={css.field}>
                        The sex: <span className={css.value}>{sex}</span>
                      </p>
                    </li>
                  )}

                  {price && (
                    <li>
                      <p className={css.field}>
                        Price: <span className={css.value}>{price}</span>
                      </p>
                    </li>
                  )}

                  <li>
                    <p className={css.field}>
                      Email:
                      <span className={css.goldValue}>{owner.email}</span>
                    </p>
                  </li>

                  {owner.phone && (
                    <li>
                      <p className={css.field}>
                        Phone:
                        <span className={css.goldValue}>{owner.phone}</span>
                      </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className={css.lowerBox}>
              {comments && (
                <p calssName={css.lowerBoxComment}>Comments: {comments}</p>
              )}

              <div className={css.lowerBtns}>
                <button
                  className={css.addToFavotiteBtn}
                  onClick={addToFavotire}
                >
                  {isFavorite ? (
                    <>
                      <p>Delete from</p>
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-heart-off`}></use>
                      </svg>
                    </>
                  ) : (
                    <>
                      <p>Add to</p>
                      <svg width="24" height="24">
                        <use href={`${sprite}#icon-heart-on-2`}></use>
                      </svg>
                    </>
                  )}
                </button>
                <a href={`mailto:${owner.email}`} className={css.contactBtn}>
                  Contact
                </a>
              </div>
            </div>
            <button className={css.deleteBtn} onClick={onClose}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          </div>
        </div>
      </>,
      document.querySelector('#modal-pet-root')
    );
  }
};

export default PetModal;
