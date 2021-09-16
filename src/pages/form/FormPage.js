import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { Formik, Form } from 'formik';
import { Tabs } from 'antd';
import * as Yup from 'yup';

import PageTitle from '../../components/ui/PageTitle/PageTitle';
import Box from '../../components/ui/Box/Box';
import Button from '../../components/ui/Button/Button';
import FormOne from '../../components/form/FormOne/FormOne';
import FormTwo from '../../components/form/FormTwo/FormTwo';
import FormThree from '../../components/form/FormThree/FormThree';
import FormFour from '../../components/form/FormFour/FormFour';
import FormFive from '../../components/form/FormFive/FormFive';

// from validation settings
import validationSchema from './validation/validationSchema';
import formInitialValues from './validation/formInitialValues';
import formModel from './validation/formModel';

const { TabPane } = Tabs;
const { formId, formFields } = formModel;
const steps = [
  {
    title: 'Форма №1',
    disabled: false,
    key: "1"
  },
  {
    title: 'Форма №2',
    disabled: true,
    key: "2"
  },
  {
    title: 'Форма №3',
    disabled: true,
    key: "3"
  },
  {
    title: 'Форма №4',
    disabled: true,
    key: "4"
  },
  {
    title: 'Форма №5',
    disabled: true,
    key: "5"
  },
];
const currentForm = step => {
  switch (step) {
    case 0:
      return <FormOne fields={formFields} />;
    case 1:
      return <FormTwo fields={formFields} />;
    case 2:
      return <FormThree fields={formFields} />;
    case 3:
      return <FormFour fields={formFields} />
    case 4:
      return <FormFive fields={formFields} />
  }
};


const FormPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState("1");
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const removeDisabled = step => steps[step].disabled = false;

  useEffect(() => {
    console.log(steps)
  }, [steps])

  const handleSubmit = (values) => {
    if (isLastStep) {
      console.log('submit is working');
    } else {
      setActiveStep(activeStep + 1);
      setActiveTab((+activeTab + 1).toString());
      removeDisabled(activeStep + 1);
      forceUpdate();
    }
  }

  const handleTabChange = activeKey => {
    setActiveTab(activeKey)
  };

  return (
    <>
      <PageTitle title="Форма" />
      <Formik
        initialValues={formInitialValues}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form id={formId}>
            <Tabs activeKey={activeTab} onChange={handleTabChange}>
              {steps.map((step, index) => (
                <TabPane tab={step.title} key={step.key} disabled={step.disabled}>
                  <Box pt={50}>
                    {currentForm(index)}
                  </Box>
                </TabPane>
              ))}
            </Tabs>
            <Box pt={80}>
              <Button t="submit">{isLastStep ? 'Получить результат' : 'Продолжить'}</Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default FormPage;