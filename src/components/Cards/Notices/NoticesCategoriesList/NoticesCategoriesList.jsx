import React from 'react';
import { useSelector } from 'react-redux';
import { getPets } from 'redux/pets/selectors';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import css from './NoticesCategoriesList.module.css';

const CategoryList = () => {
  const pets=useSelector(getPets)
  console.log("🚀 ~ CategoryList ~ pets:", pets)
  
  return (
    <ul className={css.list}>
      {pets.map(
        ({ id, title, file, location, age, sex, category, noticeId }) => (
          <CategoryItem
            key={id}
            id={id}
            title={title}
            file={file}
            location={location}
            age={age}
            sex={sex}
            category={category}
            noticeId={noticeId}
          />
        )
      )}
    </ul>
  );
};

export default CategoryList;
