import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { instance } from '../../service/api/api';

const AfterVerifEmail = () => {
  const navigate = useNavigate();
  const { verificationToken } = useParams();

  useEffect(() => {
    const redirect = async () => {
      const verify_endpoint = `/users/verify/${verificationToken}`;
      const { data } = await instance.get(verify_endpoint);
      if (data.token) {
        // *-* Тут повинні бути дії, які зберігають jwt token *-*
        navigate('/', { replace: true });
      } else {
        navigate('/404', { replace: true });
      }
    };

    redirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default AfterVerifEmail;
