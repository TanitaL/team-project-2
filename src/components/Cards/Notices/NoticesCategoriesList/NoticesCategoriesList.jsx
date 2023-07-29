import React from 'react';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import css from './NoticesCategoriesList.module.css';
import { nanoid } from '@reduxjs/toolkit';
const CategoryList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(
        ({ _id, title, text, date, file, location, name, sex }, index) => (
          <CategoryItem
            key={nanoid(5)}
            _id={_id}
            title={title}
            text={text}
            date={date}
            file={file}
            location={location}
            name={name}
            sex={sex}
          />
        )
      )}
    </ul>
  );
};

export default CategoryList;
