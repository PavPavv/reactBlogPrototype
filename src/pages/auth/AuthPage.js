import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './AuthPage.module.scss';

import Loader from '../../components/Loader/Loader';
import Input from '../../components/Form/Input/Input';
import InputError from '../../components/Form/InputError/InputError';
import SubmitButton from '../../components/Form/SubmitButton/SubmitButton';
import * as actions from '../../store/auth/actions';

const AuthPage = ({ history }) => {
  //const token = useSelector(state => state.auth.token);
  const storageToken = localStorage.getItem('fakeToken')
  const { token, error, loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const validationRules = Yup.object({
    login: Yup.string()
      .min(4, 'Must be at least 4 characters long')
      .required('Please, enter login'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters long')
      .required('Please, enter password'),
  });

  const checkValidation = async ({ login, password }) => {
    dispatch(actions.auth(login, password));
  };

  useEffect(() => {
    if (storageToken) {
      history.push('/');
    }
  }, [history, storageToken]);

  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [history, token]);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validationRules,
    onSubmit: (values, resetForm) => {
      checkValidation(values);
      resetForm();
    },
  });
  return (
    <div className={styles.AuthWrap}>
      <h2>Enter</h2>
      <form
        className={styles.AuthForm}
        onSubmit={formik.handleSubmit}
      >

        <div className={styles.ErrorWrap}>
          <Input
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />
          {formik.touched.login && formik.errors.login ? (
            <InputError>{formik.errors.login}</InputError>
          ) : null}
          {formik.touched.login && error && !formik.errors.login ? (<InputError>Incorrect email or password.</InputError>) : null}
        </div>


        <div className={styles.ErrorWrap}>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <InputError>{formik.errors.password}</InputError>
          ) : null}
          {formik.touched.password && error && !formik.errors.password ? (<InputError>Incorrect email or password.</InputError>) : null}
        </div>

        <SubmitButton>Log In</SubmitButton>
      </form>
      {loading && <Loader />}
    </div>
  );
}

export default AuthPage;
