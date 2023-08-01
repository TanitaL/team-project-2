import { Link, useLocation } from 'react-router-dom';

import Container from 'components/Container/Container/Container';
import ProfileForm from 'components/ProfileForm/ProfileForm';
import MyPetsList from 'components/Cards/MyPets/MyPetsList/MyPetsList';

import css from 'pages/UserPage/UserPage.module.css';
import { ReactComponent as PlusSvg } from 'assets/svg/plus.svg';

const AddPetBtn = () => {
  const location = useLocation();

  return (
    <Link state={{ from: location }} className={css.addPetBtn} to="/add-pet">
      Add Pet
      <PlusSvg className={css.addPetBtnSvg} />
    </Link>
  );
};

const UserPage = () => {
  return (
    <Container>
      <div className={css.container}>
        <div>
          <h2 className={css.title}> My information: </h2>
          <ProfileForm />
        </div>
        <div className={css.petListBox}>
          <h2 className={css.title}>
            My pets: <AddPetBtn />
          </h2>
          <MyPetsList />
        </div>
      </div>
    </Container>
  );
};

export default UserPage;
