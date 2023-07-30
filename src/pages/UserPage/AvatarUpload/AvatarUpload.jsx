import React, { useState } from 'react'
import css from '../AvatarUpload/AvatarUpload.module.css';

const AvatarUpload = ({ file, width, height }) => {
  const [preview, setPreview] = useState(null);
  
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <>
      {/* <img className={css.previewImg} src={preview} alt={preview} width={width} height={height}/> */}
      {preview ? (
        <img
          className={css.avatarUpload}
          src={preview}
          alt={preview}
          width={width}
          height={height}
        />
      ) : (
        '...loading'
      )}
    </>
  );
};

export default AvatarUpload;