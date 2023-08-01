import { useState, useEffect } from 'react';

import { instance } from 'service/api/api';
import notify from 'service/addPetHelpers/toast';
import MyPetsItem from './MyPetsItem/MyPetItem';
import Loader from 'components/Loader/Loader';

import css from './MyPetsList.module.css';

const MyPetsList = () => {
  const [notices, setNotices] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [errorMyPets, setErrorMyPets] = useState(null);

  useEffect(() => {
    const getMyPets = async () => {
      try {
        const { data } = await instance.get('/notices/mypets');
        setNotices([...data.notices]);
      } catch (error) {
        const message = error.response.data.message;
        notify.error(message);
        setErrorMyPets(message);
      } finally {
        setIsPending(false);
      }
    };

    getMyPets();
  }, []);

  const onDelete = deleteId => {
    return async () => {
      try {
        const { data } = await instance.delete(`/notices/${deleteId}`);
        setNotices(prev => [...prev.filter(({ id }) => id !== deleteId)]);
        notify.success(data.message);
      } catch (error) {
        const message = error.response.data.message;
        notify.error(message);
      }
    };
  };

  const mapCallBack = ({ id, name, date, type, comments, file }) => (
    <MyPetsItem
      key={id}
      name={name}
      breed={type}
      date={date}
      comments={comments}
      image={file}
      onDelete={onDelete(id)}
    />
  );

  if (isPending) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (errorMyPets) {
    return (
      <>
        <p className={css.centerText}>Error: {errorMyPets}</p>
      </>
    );
  }

  if (notices.length === 0) {
    return (
      <>
        <p className={css.centerText}>You don't have any pets</p>
      </>
    );
  }

  return (
    <>
      <ul className={css.list}>{notices.map(mapCallBack)}</ul>
    </>
  );
};

export default MyPetsList;
