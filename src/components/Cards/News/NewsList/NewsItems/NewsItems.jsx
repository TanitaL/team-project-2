import React, { useState } from 'react';
import css from './NewsItems.module.css';
import dayjs from 'dayjs';

const NewsItems = ({ id, title, text, date, imgUrl, url }) => {
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
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
        <p className={css.text}>{text}</p>
        <div className={css.itemWrapper}>
          <p className={css.date}>{formattedDate}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            Read more
          </a>
        </div>
      </div>
    </li>
  );
};

export default NewsItems;
