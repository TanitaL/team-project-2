import React from 'react';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import css from './NoticesCategoriesList.module.css';

const CategoryList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(({ id, title, text, date, file, location, name, sex }) => (
        <CategoryItem
          key={id}
          id={id}
          title={title}
          text={text}
          date={date}
          file={file}
          location={location}
          name={name}
          sex={sex}
        />
      ))}
    </ul>
  );
};

export default CategoryList;
