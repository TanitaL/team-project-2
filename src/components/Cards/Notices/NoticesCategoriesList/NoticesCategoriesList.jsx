import React  from 'react';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { getPets } from 'redux/pets/selectors';

import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import css from './NoticesCategoriesList.module.css';

const CategoryList = () => {
  const pets = useSelector(getPets);
  const { categoryName } = useParams();
  console.log("🚀 ~ CategoryList ~ categoryName:", categoryName)

  return (
    <ul className={css.list}>
      {pets.map(
        ({
          id,
          title,
          file,
          location,
          age,
          sex,
          category,
          noticeId,
          favorite = false,
          owner,
        }) => (
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
            favorite={favorite}
            owner={owner}
          />
        )
      )}
    </ul>
  );
};

export default CategoryList;
