import NewsItems from './NewsItems/NewsItems';
import css from './NewsList.module.css';
import containerCss from '../../../Container/Container/Container.module.css';

const NewsList = ({ news }) => {
  return (
    <ul className={`${css.list} ${containerCss.containerMain}`}>
      {news.map(({ url, title, body, date, image }) => (
        <NewsItems
          key={url}
          title={title}
          body={body}
          date={date}
          image={image}
          url={url}
          loading="lazy"
        />
      ))}
    </ul>
  );
};

export default NewsList;
