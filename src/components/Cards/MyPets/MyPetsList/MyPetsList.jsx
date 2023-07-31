import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { instance } from 'service/api/api';
import MyPetsItem from './MyPetsItem/MyPetItem';

import css from './MyPetsList.module.css';

const MyPetsList = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const getMyPets = async () => {
      try {
        const { data } = await instance.get('/notices/mypets');
        setNotices([...data.notices]);
      } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
      }
    };

    getMyPets();
  }, []);

  const onDelete = deleteId => {
    return async () => {
      try {
        const { data } = await instance.delete(`/notices/${deleteId}`);
        setNotices(prev => [...prev.filter(({ id }) => id !== deleteId)]);
        Notiflix.Notify.success(data.message);
      } catch (error) {
        Notiflix.Notify.failure(error.response.data.message);
      }
    };
  };

  return (
    <ul className={css.list}>
      {notices.map(({ id, name, date, type, comments, file }) => (
        <MyPetsItem
          key={id}
          name={name}
          breed={type}
          date={date}
          comments={comments}
          image={file}
          onDelete={onDelete(id)}
        />
      ))}
    </ul>
  );
};

export default MyPetsList;
