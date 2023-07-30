import { useState } from 'react';
import ChooseOption from '../Steps/ChooseOption';
import FormStepper from '../FormStepper/FormStepper';
import MoreInfo from '../Steps/MoreInfo';
import PersonalDetails from '../Steps/PersonalDetails';
import css from './AddPetForm.module.css';
import { categoryObj, petCategory } from 'constants/petCategory';
import { useDispatch, useSelector } from 'react-redux';
import { addPet } from 'redux/pets/operations';
import stepsLable from 'constants/stepsLable';
// import transformFormData from 'service/addPetHelpers/transformFormData';
// import prepareFormData from 'service/addPetHelpers/prepareFormData';
import { useNavigate } from 'react-router-dom';
import { getError, getIsLoading } from 'redux/pets/selectors';
import Loader from 'components/LoaderPort/Loader';
import makeformData from 'service/addPetHelpers/makeformData';

const initialValues = {
  category: 'your pet',
  title: '',
  name: '',
  date: '',
  sex: '',
  file: null,
  location: '',
  price: '',
  typePet: '',
  comments: '',
};

const { MYPET } = categoryObj;

const AddPetForm = () => {
  const [data, setData] = useState(initialValues);
  const [currentStep, setCurrentStep] = useState(0);
  const dispatsh = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  // const pets = useSelector(getPets);
  console.log('🚀 ~ AddPetForm ~ isLoading:', isLoading);

  // const makeRequest = values => {
  //   const transformedValues = transformFormData(values);
  //   const newValues = prepareFormData(transformedValues);
  //   console.log('🚀 ~ makeRequest ~ newValues:', newValues);
  //   const formData = new FormData();
  //   for (let value in newValues) {
  //     formData.append(value, newValues[value]);
  //   }

  //   for (let property of formData.entries()) {
  //     console.log(property[0], property[1]);
  //   }
  // };

  const handleNextStep = async (newData, final = false, actions) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      // await makeRequest(newData);
      const formData = makeformData(newData);
      dispatsh(addPet(formData))
        .then(() => {
          console.log('Це пере умовою у зен: error:', error);
          if (data.category === MYPET.label && !error && !isLoading) {
            // console.log('Це перед навігейтом /user');
            // console.log('Це isLoading  перед навігейтом /user', isLoading);

            navigate('/user');
            // console.log('Це isLoading  after навігейтом /user', isLoading);
          } else if (data.category !== MYPET.label && !isLoading) {
            // console.log('Це isLoading  перед навігейтом /notices', isLoading);
            if (!error) {
              console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ .then ~ !error:', !error);
              navigate('/notices');
            }

            // console.log('Це isLoading  after навігейтом /notices', isLoading);
          }
        })
        .catch(error => {
          // Handle any errors that occurred during the asynchronous operation
          console.log('Error:', error);
        });

      // if (data.category === MYPET.label && !error && !isLoading) {
      //   console.log('Це перед навігейтом /user');

      //     console.log('Це isLoading  перед навігейтом /user', isLoading);
      //     navigate('/user');
      //     console.log('Це isLoading  after навігейтом /user', isLoading);

      // } else if (data.category !== MYPET.label && !isLoading) {

      //     console.log('Це isLoading  перед навігейтом /notices', isLoading);
      //     navigate('/notices');
      //     console.log('Це isLoading  after навігейтом /notices', isLoading);

      // }

      // if (!error && !isLoading) {
      //   setData(initialValues);
      //   actions.resetForm();
      // }

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
  // console.log('🚀 ~ handleNextStep ~ data:', data);

  return (
    <section
      className={
        currentStep === 2 && data.category !== petCategory[0]
          ? css.notMyPetstep3Section
          : css.section
      }
    >
      {isLoading && <Loader />}
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
