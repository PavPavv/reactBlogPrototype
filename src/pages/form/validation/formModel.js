export default {
  formId: 'testForm',
  formFields: {
    name: {
      label: 'Как к тебе обращаться?',
      name: 'name',
      place: 'Mr.Secret',
      requiredErrorMsg: 'Не-не, введи весёлое имя!',
    },
    food: {
      label: 'Какая твоя любимая еда?',
      name: 'food',
      place: 'Морковка',
      requiredErrorMsg: 'Ух, как не вкусно:(',
    },
    movie: {
      label: 'Какой твой любимый фильм?',
      name: 'movie',
      place: 'Прибытие поезда',
      requiredErrorMsg: 'А такой есть?',
    },
    present: {
      label: 'Что ты хочешь на день рождения?',
      name: 'present',
      place: 'Гитару',
      requiredErrorMsg: 'Разве может быть такой подарок?',
    },
  }
};
