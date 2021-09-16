import * as Yup from 'yup';

import formModel from './formModel';

const {
  formFields: {
    name,
    food,
    movie,
    present,
  }
} = formModel;

export default [
  Yup.object().shape({
    [name.name]: Yup.string().min(4, 'Должно быть минимум  4 символа').required(`${name.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [food.name]: Yup.string().min(4, 'Должно быть минимум  4 символа').required(`${food.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [movie.name]: Yup.string().min(4, 'Должно быть минимум  4 символа').required(`${movie.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [present.name]: Yup.string().min(4, 'Должно быть минимум  4 символа').required(`${present.requiredErrorMsg}`),
  }),
];