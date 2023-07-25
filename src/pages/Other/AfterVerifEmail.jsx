import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AfterVerifEmail = () => {
  const navigate = useNavigate();
  const { verificationToken } = useParams();

  useEffect(() => {
    const redirect = async () => {
      const verify_url = `/users/verify/${verificationToken}`;
      const { data } = await axios.get(verify_url);
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
