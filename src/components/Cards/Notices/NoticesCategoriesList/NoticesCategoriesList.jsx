import React from 'react';
import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import css from './NoticesCategoriesList.module.css';

const CategoryList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(
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
