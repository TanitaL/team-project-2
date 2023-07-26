import React from 'react';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import css from './NoticesCategoriesList.module.css';

const CategoryList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(({ _id, title, text, date, file, location, name, sex }) => (
        <CategoryItem
          key={_id}
          _id={_id}
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
