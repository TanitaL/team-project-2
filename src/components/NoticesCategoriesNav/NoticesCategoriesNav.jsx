import { useLocation, Link } from 'react-router-dom';

import { useAuth } from '../../redux/auth/useAuth';
import categories from './categories';
import styles from './notices-categories-nav.module.scss';

const { publicCategories, privateCategories } = categories;

const getFullName = (location, category) => {
    const res = category === location ? `${styles.button} ${styles.active}` : styles.button;
    return res;
};

const NoticesCategoriesNav = () => {
    const { token } = useAuth();
    const { pathname, search } = useLocation();

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {publicCategories.map(({ to, text, id }) => (
                    <li key={id}>
                        <Link to={{ pathname: to, search }} className={getFullName(pathname, to)}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
            {token && (
                <ul className={styles.list}>
                    {privateCategories.map(({ to, text, id }) => (
                        <li key={id}>
                            <Link to={{ pathname: to, search }} className={getFullName(pathname, to)}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NoticesCategoriesNav;
