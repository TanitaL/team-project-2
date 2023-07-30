import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { austOperationThunk } from 'redux/auth/thunks';
import { useDispatch } from 'react-redux';
import ModalVerificeteEmail from 'components/Modals/ModalVerificationEmail/ModalVerificationEmail';

const AfterVerifEmail = () => {
  const navigate = useNavigate();
  const { verificationToken } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      austOperationThunk({
        endpoint: 'verify',
        urlToken: verificationToken,
      })
    );
  }, [dispatch, verificationToken]);
  const handleClose = () => {
    navigate('/');
  };

  const handleSuccess = () => {
    navigate('/notices');
  };

  return (
    <>
      <ModalVerificeteEmail
        handleClose={handleClose}
        handleSuccess={handleSuccess}
      />
    </>
  );
};

export default AfterVerifEmail;
