import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import styles from './AuthPage.module.scss';

import Loader from '../../components/ui/Loader/Loader';
import InputForm from '../../components/ui/Form/InputForm/InputForm';
import InputError from '../../components/ui/Form/InputError/InputError';
import SubmitButton from '../../components/ui/Form/SubmitButton/SubmitButton';
import * as actions from '../../store/auth/actions';

const AuthPage = ({ history }) => {
  const storageToken = localStorage.getItem('fakeToken')
  const { token, error, loading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const notify = () => toast.info("Это тестовый прототип, для входа воспользуйтесь данными: логин - admin, пароль - 123456");
  const validationRules = Yup.object({
    login: Yup.string()
      .min(4, 'Логин должен состоять не менее, чем из 4 символов')
      .required('Введите логин'),
    password: Yup.string()
      .min(6, 'Логин должен состоять не менее, чем из 6 символов')
      .required('Введите пароль'),
  });

  const checkValidation = async ({ login, password }) => {
    dispatch(actions.auth(login, password));
  };

  useEffect(() => {
    setTimeout(() => {
      notify();
    }, 1000);
  }, [])

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
      <h2>Вход</h2>
      <form
        className={styles.AuthForm}
        onSubmit={formik.handleSubmit}
      >

        <div className={styles.ErrorWrap}>
          <InputForm
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
            placeholder="Логин"
          />
          {formik.touched.login && formik.errors.login ? (
            <InputError>{formik.errors.login}</InputError>
          ) : null}
          {formik.touched.login && error && !formik.errors.login ? (<InputError>Вы ввели неправильный логин или пароль</InputError>) : null}
        </div>


        <div className={styles.ErrorWrap}>
          <InputForm
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Пароль"
          />
          {formik.touched.password && formik.errors.password ? (
            <InputError>{formik.errors.password}</InputError>
          ) : null}
          {formik.touched.password && error && !formik.errors.password ? (<InputError>Вы ввели неправильный логин или пароль</InputError>) : null}
        </div>

        <SubmitButton>Войти</SubmitButton>
        <ToastContainer />
      </form>
      {loading && <Loader />}
    </div>
  );
}

export default AuthPage;
