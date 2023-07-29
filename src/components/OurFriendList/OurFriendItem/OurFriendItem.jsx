import { OurFriendWorkDays } from '../OurFriendWorkDays/OurFriendWorkDays';
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
    <li>
      <h2>{title}</h2>
      <ul>
        <li>
          <p>Time:</p>

          {workDays && workDays.length > 0 ? (
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
          ) : <p>We are close</p>}
        </li>
        <li>
          <p>Address</p>
          <p>{address}</p>
        </li>
        <li>
          <p>Email: </p>
          <p>{email ? email : 'king5vadim@gmail.com'}</p>
        </li>
        <li>
          <p>Phone</p>
          <p>{phone}</p>
        </li>
      </ul>
    </li>
  );
};
