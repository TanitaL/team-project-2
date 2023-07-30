import React from 'react';
import BgContainer from 'components/Container/BgContainer/BgContainer';
import AddPetForm from 'components/AddPetForm/AddPetForm/AddPetForm';
import Container from 'components/Container/Container/Container';

function AddPetPage() {
  return (
    <BgContainer>
      <Container>
        <AddPetForm />
      </Container>
    </BgContainer>
  );
}

export default AddPetPage;
