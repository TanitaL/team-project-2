import React, { useState } from 'react'
import css from './PreviewImage.module.css';

const PreviewImage = ({ file, width, height }) => {
  const [preview, setPreview] = useState(null);
  console.log("🚀 ~ PreviewImage ~ preview:", preview)
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div>
      {/* <img className={css.previewImg} src={preview} alt={preview} width={width} height={height}/> */}
      {preview ? (
        <img src={preview} alt={preview} width={width} height={height} />
      ) : (
        '...loading'
      )}
    </div>
  );
};

export default PreviewImage