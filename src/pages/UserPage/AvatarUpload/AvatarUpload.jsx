import React, { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import { BsPlusLg } from 'react-icons/bs';
import defaultAvatar from 'pages/UserPage/avatar/Photodefault.jpg';
import css from '../AvatarUpload/AvatarUpload.module.css';

const AvatarUpload = ({ file, width, height }) => {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const readFileContent = () => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPreview(reader.result);
        };
      } else {
        setPreview(defaultAvatar);
      }
    };

    readFileContent();
  }, [file]);

  return (
    <div className={css.positionRelative}>
      {preview ? (
        <img
          className={css.avatarUpload}
          src={preview}
          alt="Your new prifile avatar"
        />
      ) : (
        <Loader className={css.center} />
      )}
      {!file && <BsPlusLg className={css.center} />}
    </div>
  );
};

export default AvatarUpload;
