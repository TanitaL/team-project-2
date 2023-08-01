import React, { useEffect, useRef, useState } from 'react';

import Loader from 'components/Loader/Loader';
import defaultAvatar from '../icons/Photodefault.jpg';
import { BsPlusLg } from 'react-icons/bs';
import css from './AvatarUpload.module.css';

import { ReactComponent as CameraSvg } from '../icons/camera.svg';
import { ReactComponent as ConfirmSvg } from '../icons/confirm.svg';
import { ReactComponent as RejectSvg } from '../icons/reject.svg';

const AvatarUpload = ({ userFile, isEditing, setImage }) => {
  const fileInputRef = useRef(null);

  const [newFile, setNewFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prevAvatar, setPrevAvatar] = useState(null);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);

  const chooseAvatar = () => {
    fileInputRef.current.click();
  };

  const onChange = e => {
    // const [file] = e.target;
    setIsAvatarChanged(true);
    setNewFile(e.target.files[0] || prevAvatar);
  };

  const onConfirm = () => {
    setImage(preview);
    setPrevAvatar(newFile);
    setIsAvatarChanged(false);
  };

  const onReject = () => {
    setNewFile(prevAvatar);
    setPrevAvatar(null);
    setIsAvatarChanged(false);
  };

  useEffect(() => {
    if (isEditing) {
      setIsAvatarChanged(false);
    } else {
      setNewFile(null);
    }
  }, [isEditing]);

  useEffect(() => {
    const readFileContent = () => {
      if (newFile && isEditing) {
        newFile.preview = URL.createObjectURL(newFile);
        setPreview(newFile);
      } else if (userFile) {
        setPreview({ preview: userFile });
      } else {
        setPreview({ preview: defaultAvatar });
      }
    };

    readFileContent();
  }, [userFile, newFile, isEditing]);

  return (
    <>
      <input
        hidden
        ref={fileInputRef}
        type="file"
        name="file"
        accept="image/jpeg, image/png"
        onChange={onChange}
        disabled={!isEditing || isAvatarChanged}
      />
      <div className={css.img} onClick={chooseAvatar}>
        <div className={css.positionRelative}>
          {preview ? (
            <img
              className={css.avatarUpload}
              src={preview.preview}
              alt="Your new profile avatar"
            />
          ) : (
            <Loader className={css.center} />
          )}
          {!userFile && isEditing && <BsPlusLg className={css.center} />}
        </div>
      </div>

      {/* ----------------------------------------------------- */}
      {/* Кнопки загального фото редагування  */}
      {isEditing && (
        <div className={css.photoBtns}>
          {isAvatarChanged ? (
            <>
              {/* Кнопки підтвердження фото  */}
              <button
                type="button"
                className={css.confirmBtn}
                onClick={onConfirm}
              >
                <ConfirmSvg />
              </button>
              <p>Confirm</p>
              <button
                type="button"
                className={css.confirmBtn}
                onClick={onReject}
              >
                <RejectSvg />
              </button>
            </>
          ) : (
            <>
              {/* Кнопка камера  */}
              <button
                type="button"
                className={css.cameraBtn}
                onClick={chooseAvatar}
              >
                <CameraSvg /> Edit photo
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AvatarUpload;
