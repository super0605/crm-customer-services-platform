import React, { FC, useEffect, useState } from 'react';
import { Formik } from 'formik';
import { buildYup } from 'schema-to-yup';
import styled from 'styled-components';

import { SettingsFormFactory } from '../../../components/SettingsForm/SettingsFormFactory';
import {
  jsonSchema,
  uiSchema,
  vaildationSchema,
  validationConfig
} from './testData';
import Button from '../../../components/Button';

interface IProps {
  path: string;
  ui?: any;
  initialValues?: any;
}

const Container = styled.div`
  height: 100vh;
  .form-row :last-child :after {
    content: none;
  }
`;

const ButtonToolbar = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 70px;
  padding-left: 346px;
  background-color: ${props => props.theme.white};
  border-top: 1px solid #d2d8dd;

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 112px;
    height: 34px;
    border-radius: 4px;
    border-width: 0;
    font-family: Rubik;
    font-size: 13px;
    line-height: 150%;
  }

  .btn-secondary button {
    margin-left: 329px;
    background-color: #f7f7f7;
    color: #a9b0b0;
    border: 1px solid #d3d6d7;
  }
`;

const TasksPage: FC<IProps> = ({ ui, initialValues }) => {
  const [yupSchema, setYupSchema] = useState({});

  useEffect(() => {
    setYupSchema(buildYup(vaildationSchema, validationConfig));
  }, []);

  return (
    <Formik
      initialValues={initialValues || jsonSchema}
      validationSchema={yupSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {(formikProps: any) => (
        <form onSubmit={formikProps.handleSubmit}>
          <Container>
            {SettingsFormFactory(ui || uiSchema, formikProps)}
          </Container>

          <ButtonToolbar>
            <Button
              className='btn-primary'
              onClick={formikProps.handleSubmit}
              size='medium'
              styleType='primary'
            >
              Save
            </Button>
            <Button
              className='btn-secondary'
              onClick={formikProps.handleSubmit}
              size='medium'
              styleType='secondary'
            >
              Discard changes
            </Button>
          </ButtonToolbar>
        </form>
      )}
    </Formik>
  );
};

export default TasksPage;
