import { useState } from 'react';
import ChooseOption from '../Steps/ChooseOption';
import FormStepper from '../FormStepper/FormStepper';
import MoreInfo from '../Steps/MoreInfo';
import PersonalDetails from '../Steps/PersonalDetails';
import css from './AddPetForm.module.css';
import { petCategory } from 'constants/petCategory';

const initialValues = {
  category: 'your pet',
  title: '',
  name: '',
  date: '',
  sex: '',
  file: '',
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

  const makeRequest = formData => {
    console.log('🚀 ~ makeRequest ~ formData:', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
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

  return (
    <section className={css.section}>
      {(currentStep === 0 || data.category === petCategory[0]) && <h1 className={css.title}>Add pet</h1>}
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

