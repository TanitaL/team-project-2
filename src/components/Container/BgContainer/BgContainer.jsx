import React from 'react';
import { ToastContainer } from 'react-toastify';
import css from './BgContainer.module.css';

const BgContainer = ({ children }) => {
  return (
    <>
      <div className={css.bgContainer}>{children}</div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default BgContainer;
