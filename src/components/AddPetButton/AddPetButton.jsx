import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg';
import { ReactComponent as PlusSmallIcon } from '../../assets/svg/plus-small.svg';
import style from './AddPetButton.module.scss';

// import { authSelector } from 'redux/auth/selectors';
// import { useSelector } from 'react-redux';

const AddPetButton = () => {
  const location = useLocation();
 
  // const isAuth = useSelector(authSelector);

  // const handleClick = () => {
  //   if (!isAuth) {
  //  }
    //  if (!isAuth) {
    //    window.location.href = '/team-project-2/add-pet';
    //  } else {
    //    alert('Sign in to add your own notice..');
    //  }
  // };

  return (
    <Link
      state={{ from: location }}
      className={style.button}
      to="/add-pet"
      // onClick={handleClick}
    >
      <PlusIcon className={style.iconBig} width={24} height={24} />
      <span className={style.label}>Add Pet</span>
      <PlusSmallIcon className={style.iconSmall} width={24} height={24} />
    </Link>
  );
};

export default AddPetButton;
