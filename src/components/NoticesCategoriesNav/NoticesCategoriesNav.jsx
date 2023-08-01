import { useLocation } from 'react-router-dom';

import { useAuth } from '../../redux/auth/useAuth';
import categories from './categories';
import styles from './notices-categories-nav.module.scss';

const { publicCategories, privateCategories } = categories;

const getFullName = (location, category) => {
  const res =
    category === location ? `${styles.button} ${styles.active}` : styles.button;
  return res;
};

const NoticesCategoriesNav = ({ onChangeCategory }) => {
  const { token } = useAuth();
  const { pathname, search } = useLocation();

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {publicCategories.map(({ to, text, id }) => {
          let category = '';
          switch (text) {
            case 'sell':
              category = 'sell';
              break;
            case 'lost/found':
              category = 'lost-found';
              break;
            case 'in good hands':
              category = 'for-free';
              break;
            default:
              category = text;
          }
          return (
            <li key={id}>
              <button
                onClick={() => onChangeCategory(category)}
                className={getFullName(pathname, to)}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ul>
      {token && (
        <ul className={styles.list}>
          {privateCategories.map(({ to, text, id }) => (
            <li key={id}>
              <button
                to={{ pathname: to, search }}
                className={getFullName(pathname, to)}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>

    // <div className={styles.wrapper}>
    //   <ul className={styles.list}>
    //     {publicCategories.map(({ to, text, id }) => (
    //       <li key={id}>
    //         <Link
    //           to={{ pathname: to, search }}
    //           className={getFullName(pathname, to)}
    //         >
    //           {text}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    //   {token && (
    //     <ul className={styles.list}>
    //       {privateCategories.map(({ to, text, id }) => (
    //         <li key={id}>
    //           <Link
    //             to={{ pathname: to, search }}
    //             className={getFullName(pathname, to)}
    //           >
    //             {text}
    //           </Link>
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
};

export default NoticesCategoriesNav;
