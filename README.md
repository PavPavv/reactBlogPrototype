# Прототип функционала блога с псевдоавторизацией.
_Проект использует пакетный менеджер yarn._

### Используемый стек:
* **React 17**
* **Hooks**
* **Redux**
* **Formik**
* **Yup**
* **Prop-types**
* **scss**
* **css modules**
* **react-router**
* **localStorage**
* **ES6**
* **axios**
* **Ant Design**


### Тестовый функционал:
* Псевдоавторизация (имитация запроса и ответа с помощью асинхронной функции с Promise). Чтоб "залогиниться" в тестовое приложени
ввести логин (login): "admin" и пароль (password): "123456".
* Хранение искуственного токена, выданного функционало псевдоавторизации в localStorage.
* Авторазлогирование по истечении срока жизни токена (EXPIRATION_TIME).
* Кнопка Logout, которая удаляет запись токена из localStorage.


### Уствновка и запуск
Необходимо скачать или склонировать проект к себе на компьютер и запустить в консоли приложения команду **yarn start**.
