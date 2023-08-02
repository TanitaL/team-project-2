import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyPets, deletePet } from 'redux/pets/operations';
import { getMyPets, getIsLoading, getError } from 'redux/pets/selectors';

import MyPetsItem from 'components/Cards/MyPets/MyPetsList/MyPetsItem/MyPetItem';
import Loader from 'components/Loader/Loader';

import css from 'components/Cards/MyPets/MyPetsList/MyPetsList.module.css';

const MyPetsList = () => {
  const dispatch = useDispatch();

  const notices = useSelector(getMyPets);
  const isPending = useSelector(getIsLoading);
  const errorMyPets = useSelector(getError);

  useEffect(() => {
    dispatch(fetchMyPets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = deleteId => {
    return async () => {
      dispatch(deletePet(deleteId));
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
      <div className={css.centerBox}>
        <Loader />
      </div>
    );
  }

  if (errorMyPets) {
    dispatch(fetchMyPets());
  }

  if (notices.length === 0) {
    return (
      <div className={css.centerBox}>
        <p>You don't have any pets</p>
      </div>
    );
  }

  return (
    <>
      <ul className={css.list}>{notices.map(mapCallBack)}</ul>
    </>
  );
};

export default MyPetsList;
