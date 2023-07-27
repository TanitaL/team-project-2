import { useState } from 'react';
import ChooseOption from '../Steps/ChooseOption';
import FormStepper from '../FormStepper/FormStepper';
import MoreInfo from '../Steps/MoreInfo';
import PersonalDetails from '../Steps/PersonalDetails';
import css from './AddPetForm.module.css';
import { petCategory } from 'constants/petCategory';
import { useDispatch } from 'react-redux';
import { addPet } from 'redux/pets/operations';

const initialValues = {
  category: 'your pet',
  title: '',
  name: '',
  date: '',
  sex: '',
  file: null,
  location: '',
  price: '',
  type: '',
  comments: '',
};

const stepsLable = [
  { label: 'Choose option', value: 'choose_option' },
  { label: 'Personal details', value: 'personal_details' },
  { label: 'More info', value: 'more_info' },
];

const AddPetForm = () => {
  const [data, setData] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);
  const dispatsh = useDispatch();

  const makeRequest = (values,actions) => {
   
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    
    for (let property of formData.entries()) {
      console.log(property[0], property[1]);
    }

    dispatsh(addPet(formData));
    actions.resetForm();
  };

  const handleNextStep = (newData, final = false,actions) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData,actions);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <ChooseOption next={handleNextStep} data={data} />,
    <PersonalDetails next={handleNextStep} data={data} prev={handlePrevStep} />,
    <MoreInfo next={handleNextStep} data={data} prev={handlePrevStep} />,
  ];
  console.log('🚀 ~ handleNextStep ~ data:', data);
  console.log('🚀 ~ handleNextStep ~ typeof(data.price):', typeof data.price);

  return (
    <section
      className={
        (currentStep === 2 && data.category !== petCategory[0])
          ? css.notMyPetstep3Section
          : css.section
      }
    >
      {(currentStep === 0 || data.category === petCategory[0]) && (
        <h1 className={css.title}>Add pet</h1>
      )}
      {/* { data.category === petCategory[0] && <h1 className={css.title}>Add pet</h1>} */}
      {currentStep !== 0 && data.category === petCategory[1] && (
        <h1 className={css.title}>Add pet for sale</h1>
      )}
      {currentStep !== 0 && data.category === petCategory[2] && (
        <h1 className={css.title}>Add lost pet</h1>
      )}
      {currentStep !== 0 && data.category === petCategory[3] && (
        <h1 className={css.title}>Add pet in good hands</h1>
      )}
      <FormStepper currentStep={currentStep} steps={stepsLable} />
      {steps[currentStep]}
    </section>
  );
};

export default AddPetForm;
