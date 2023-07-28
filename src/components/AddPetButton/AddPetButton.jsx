import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg';
import { ReactComponent as PlusSmallIcon } from '../../assets/svg/plus-small.svg';
import style from './AddPetButton.module.scss';


const AddPetButton = ({ isAuthenticated }) => {
  const handleClick = () => {
    if (isAuthenticated) {
      window.location.href = '/add-pet';
    } else {
      alert('Sign in to add your own notice..');
    }
  };

    return (
        <Link className={style.button} onClick={handleClick}>
            <PlusIcon className={style.iconBig} width={24} height={24} />
            <span className={style.label}>Add Pet</span>
            <PlusSmallIcon className={style.iconSmall} width={24} height={24} />
        </Link>
  );
};

export default AddPetButton;
