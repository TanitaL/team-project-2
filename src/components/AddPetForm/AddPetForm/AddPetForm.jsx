import { useState } from 'react';
import ChooseOption from '../Steps/ChooseOption';
import FormStepper from '../FormStepper/FormStepper';
import MoreInfo from '../Steps/MoreInfo';
import PersonalDetails from '../Steps/PersonalDetails';

const initialValues = {
  category: 'your pet',
  title: '',
  name: '',
  date: '',
  sex: '',
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
    <>
      <FormStepper currentStep={currentStep} steps={stepsLable} />
      {steps[currentStep]}
    </>
  );
};

export default AddPetForm;

