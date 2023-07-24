import CategoryItem from './NoticesCategoriesItem/NoticesCategoriesItem';
import css from './NoticesCategoriesList.module.css';

const CategoryList = ({ news }) => {
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className={css.list}>
      {sortedNews.map(({ id, title, text, date, imgUrl, url }) => (
        <CategoryItem
          key={id}
          id={id}
          title={title}
          text={text}
          date={date}
          imgUrl={imgUrl}
          url={url}
          loading="lazy"
        />
      ))}
    </ul>
  );
};

export default CategoryList;