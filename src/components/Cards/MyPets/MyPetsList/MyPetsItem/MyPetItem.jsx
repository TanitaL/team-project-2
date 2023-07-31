import { ReactComponent as DeleteSvg } from './icons/delete.svg';
import css from './MyPetItem.module.css';

const MyPetsItem = ({ name, date, breed, comments, image, onDelete }) => {
  return (
    <li className={css.item}>
      <img
        src={image}
        className={css.item__image}
        alt="One of your beauties pets"
      />
      <div className={css.item__afterImage}>
        <p className={css.item__fieldName}>
          Name: <span className={css.item__fieldValue}>{name}</span>
        </p>
        <p className={css.item__fieldName}>
          Date of birth: <span className={css.item__fieldValue}>{date}</span>
        </p>
        <p className={css.item__fieldName}>
          Breed: <span className={css.item__fieldValue}>{breed}</span>
        </p>
        <p className={css.item__fieldName}>
          Comments: <span className={css.item__fieldValue}>{comments}</span>
        </p>
        <button className={css.item__deleteBtn} onClick={onDelete}>
          <DeleteSvg />
        </button>
      </div>
    </li>
  );
};

export default MyPetsItem;
