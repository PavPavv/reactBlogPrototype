import formModel from './formModel';

const {
  formFields: {
    name,
    food,
    movie,
    present,
  }
} = formModel;

export default {
  [name.name]: '',
  [food.name]: '',
  [movie.name]: '',
  [present.name]: '',
}