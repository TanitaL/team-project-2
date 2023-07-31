import Container from 'components/Container/Container/Container';

import ProfileForm from 'components/ProfileForm/ProfileForm';
import MyPetsList from 'components/Cards/MyPets/MyPetsList/MyPetsList';

import css from '../UserPage/UserPage.module.css';

const UserPage = () => {
  return (
    <Container>
      <div className={css.container}>
        <div>
          <h2 className={css.title}> My information:</h2>
          <ProfileForm />
        </div>
        <div className={css.petListBox}>
          <h2 className={css.title}> My pets:</h2>
          <MyPetsList />
        </div>
      </div>
    </Container>
  );
};

export default UserPage;
