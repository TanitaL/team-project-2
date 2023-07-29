import { OurFriendWorkDays } from '../OurFriendWorkDays/OurFriendWorkDays';
import css from './OurFriendItem.module.scss';
export const OurFriendItem = ({
  title,
  url,
  addressUrl,
  imageUrl,
  address,
  workDays,
  phone,
  email,
}) => {
  return (
    <>
      <li className={css.friend__listitem}>
        <h2 className={css.friendtitle}>{title}</h2>

        <div className={css.helperbox}>
        
          <div className={css.boxfriend__logo}>
            <img src={imageUrl} alt="" className={css.friend__logo} />
          </div>
          <ul className={css.infolist}>
            <li className={css.infolist__item}>
              <p className={css.item__text}>Time:</p>

              {/* {workDays && workDays.length > 0 ? (
            <select name="" id="">
              {workDays.map(({ isOpen, from, to }, index) => (
                <OurFriendWorkDays
                  key={index}
                  isOpen={isOpen}
                  from={from}
                  to={to}
                />
              ))}
            </select>
          ) : (
            <p>We are close</p>
          )} */}
            </li>
            <li>
              <p className={css.item__text}>Address</p>
              <p className={css.item__info}>{address}</p>
            </li>
            <li>
              <p className={css.item__text}>Email: </p>
              <p className={css.item__info}>
                {email ? email : 'king5vadim@gmail.com'}
              </p>
            </li>
            <li>
              <p className={css.item__text}>Phone</p>
              <p className={css.item__info}>{phone}</p>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};
