
export const OurFriendItem = (
 { title,
  url,
  addressUrl,
  imageUrl,
  address,
  workDays,
  phone,
  email}
) => {
  
  return (
    <li>
      <h2>{title}</h2>
      <ul>
        <li>
          <p>Time:</p>
          <p>8:00- 20:00</p>
        </li>
        <li>
          <p>Address</p>
          <p>{address}</p>
        </li>
        <li>
          <p>Email: </p>
          <p>{email ? email : "king5vadim@gmail.com"}</p>
        </li>
        <li>
          <p>Phone</p>
          <p>{phone}</p>
        </li>
      </ul>
    </li>
  );
};
