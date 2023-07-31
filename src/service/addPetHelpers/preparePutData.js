const preparePutData = putData => {
  const { name, email, city, phone, birthday } = putData;
  const newPutData = { name, email };
  if (city) {
    newPutData.city = city;
  } else if (phone) {
    newPutData.phone = phone;
  } else if (birthday) {
    newPutData.birthday = birthday;
  }

  return newPutData;
};

export default preparePutData;
